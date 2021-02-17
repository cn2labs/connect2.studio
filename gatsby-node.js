const path = require("path")
const { slash } = require("gatsby-core-utils")
const slugify = require("slugify")

// Auto-generates project pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query WordPress for projects
  const {
    data: {
      allWpProject: { nodes: allProjects },
    },
  } = await graphql(`
    query {
      allWpProject {
        nodes {
          databaseId
          title
        }
      }
    }
  `)

  const projectTemplate = path.resolve("./src/templates/project.js")

  allProjects.forEach(project => {
    createPage({
      path: `/projekte/${slugify(project.title, { lower: true })}`,
      component: slash(projectTemplate),
      context: {
        id: project.databaseId,
      },
    })
  })
}
