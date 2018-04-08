//
// **** Tests for entries ****
//
// https://on.cypress.io/introduction-to-cypress

const SERVER = 'http://localhost:4000'

describe('Entries', function () {

  it('Take screenshots of the figure element on entry pages', function() {

    function takeFigureScreenshots (category) {

      // https://docs.cypress.io/guides/references/configuration.html#Viewport
      cy.viewport(1500, 1500)    // Set viewport to 1500px x 1500px

      cy.visit(`${SERVER}/${category}/`)

      cy.get('#project-list a')
        .each(function ($el, index, $list) {

        let link = $el[0] // https://api.jquery.com/get/

        cy.visit(link.href)

        // cy.get('figure').scrollIntoView()

        // Remove leading and trailing slashes, and change slashes into dashes
        let filename = link.href.replace(SERVER, '').replace(/^\//g, '').replace(/\/$/g, '').replace(/\//g, '-')

        // https://on.cypress.io/screenshot
        cy.screenshot(`figure-${filename}`)
      })
    }

    takeFigureScreenshots('learn')
    takeFigureScreenshots('create')
    takeFigureScreenshots('play')
    takeFigureScreenshots('connect')
    takeFigureScreenshots('live')

  })

})
