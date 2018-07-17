const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTalk {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const talkTemplate = path.resolve(`src/templates/talk.js`)
        result.data.allContentfulTalk.edges.forEach(({ node: talk }) => {
          createPage({
            path: `/talks/${talk.slug}`,
            component: talkTemplate,
            context: {
              slug: talk.slug,
            },
          })
        })
      })
      .then(() => {
        graphql(`
          {
            allContentfulEvent {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          const eventTemplate = path.resolve(`src/templates/event.js`)
          result.data.allContentfulEvent.edges.forEach(({ node: event }) => {
            createPage({
              path: `/events/${event.slug}`,
              component: eventTemplate,
              context: {
                slug: event.slug,
              },
            })
          })
        })
      })
      .then(() => {
        graphql(`
          {
            allContentfulSpeaker {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          const speakerTemplate = path.resolve(`src/templates/speaker.js`)
          result.data.allContentfulSpeaker.edges.forEach(
            ({ node: speaker }) => {
              createPage({
                path: `/speakers/${speaker.slug}`,
                component: speakerTemplate,
                context: {
                  slug: speaker.slug,
                },
              })
            }
          )

          resolve()
        })
      })
  })
}
