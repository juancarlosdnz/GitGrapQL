const githubQuery = {
  query: `
      {
        viewer {
          name
        }
          search(query: "user:juancarlosdnz sort:updated-desc", type: REPOSITORY, first:30) {
            nodes {
              ... on Repository {
                name
                description
                id
                url
                viewerSubscription
                licenseInfo {
                  spdxId
                }
            }
          }
        }
      }
    `
  ,
};

export default githubQuery