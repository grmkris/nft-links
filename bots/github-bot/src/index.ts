import { Probot } from "probot";
import axios from "axios";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.closed", async (context) => {
    const issueComment = context.issue({
      body:
        "Owner " +
        context.issue().owner +
        " of this issue is getting an NFT reward, checkout more on: https://www.niftios.xyz/",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  app.on("issue_comment.created", async (context) => {
    console.log("issue_comment.created");
    // get repository id
    const repository = context.payload.repository.id;
    try {
      // check if repository is managed by app
      console.log("repository", repository);
      const url =
        "http://localhost:3001/api/github/check?repository=" +
        repository.toString();
      const response = await axios.get(url);
      const result = await response.data;
      if (result === "Github") {
        if (context.payload.comment.body.includes("@niftios")) {
          // extract url from comment after @niftios
          const url = context.payload.comment.body.split("@niftios")[1].trim();

          // TODO check if NFT exist and is available for claiming
          // TODO check if user has already claimed this NFT
          // TODO mark nft to be claimed when issue is closed and github user who closes the issue can receive it

          // make a comment to the issue
          const issueComment = context.issue({
            body: `NFT is available for claiming, please check it out: ${url}, who makes PR for this issue, can claim the NFT.`,
          });
          await context.octokit.issues.createComment(issueComment);
        }
      }
    } catch (e) {
      console.log(e);
    }
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
