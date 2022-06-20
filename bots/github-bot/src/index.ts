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
    const repository = context.issue().repo;
    // check if repository is managed by app
    const response = await axios.get(
      "http://localhost:3001/api/github/check?repository=" + repository
    );
    const result = await response.data;
    if (result === "Github") {
      // make a comment to the issue
      const issueComment = context.issue({
        body:
          "Owner " +
          context.issue().owner +
          " of this issue is getting an NFT reward, checkout more on: https://www.niftios.xyz/",
      });
      await context.octokit.issues.createComment(issueComment);
    }
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
