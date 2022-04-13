import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useGroups } from '../../hooks/useGroups'
import { toast } from 'react-toastify'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useQueryClient } from 'react-query'

export const GroupsTable = () => {
  const { data, isError, isLoading, isFetched } = useGroups()
  const queryCache = useQueryClient()

  return (
      <div>
        {isLoading && (
          <div className="text-center">
            <Skeleton />
          </div>
        )}
        {isError && <div className="text-center">Error</div>}
        {isFetched && (
          <table className="table-striped table-hover table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((group, index) => (
                <tr key={index}>
                  <td>{group.name}</td>
                  <td>{group.description}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Select</button>
                    <button className="btn btn-primary btn-sm">Edit</button>
                    <button
                      className="btn-danger btn btn-sm"
                      onClick={async () => {
                        const result = await supabaseClient
                          .from(`groups`)
                          .delete()
                          .match({ id: group.id })
                        if (result.error) {
                          toast.error(result.error.message)
                        } else {
                          toast.success(`Group ${group.name} deleted`)
                          await queryCache.invalidateQueries('groups')
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
  )
}
