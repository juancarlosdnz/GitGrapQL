const githubQuery = (pageCount, queryString) => {

  return {
    query: `
    {
      viewer {
        name
      }
        search(query: "${queryString}user:juancarlosdnz sort:updated-desc", type: REPOSITORY, first:30) {
          repositoryCount
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
  }


};

export default githubQuery