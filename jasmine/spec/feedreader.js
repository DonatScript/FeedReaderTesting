/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //  ensures feed the allFeeds objects has a URL defined and that the URL is not empty.
        it('has a URL defined and not empty', function() {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // ensures the allFeeds objects has a name defined and that the name is not empty.
        it('has a name defined and not empty', function() {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {

        const menu = document.getElementsByClassName('menu-hidden')[0];

        /* TODO: Write a test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
       it('hidden by default', function() {
        expect(menu.className == 'menu-hidden').toBe(true);
       });
       /* TODO: Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it('changes visibility when the menu icon is clicked', function() {
        $( menu).toggleClass();
        expect(menu.className == "").toBe(true);
        $( menu).toggleClass();
        expect(menu.className == "menu-hidden").toBe(true);
      });
    });
      
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* ensures when the loadFeed function is called and completes its work, 
        * there is at least a single .entry element within the .feed container.
        */
        beforeEach(function(done) {
            loadFeed(0,done);
        });
        it('there is at least a single .entry element within the .feed container', function(done) {
            const feed = document.querySelector('.feed');
            expect([...feed.getElementsByClassName('entry')].length > 0).toBe(true);
            done();
        });

        describe('New Feed Selection', function() {

            /* ensures when a new feed is loaded by the loadFeed function 
            * that the content actually changes.
            */
           let oldFeed , newFeed;
            beforeEach(function(done) {
                loadFeed(0, function () {
                    oldFeed = document.querySelector('.entry').firstElementChild;
                     loadFeed(1, function () {
                      newFeed = document.querySelector('.entry').firstElementChild;
                      done();
                    });
                });
            });
           it('that the content actually changes', function(done) {
            expect(oldFeed.innerHTML).not.toEqual(newFeed.innerHTML);
            done();
           })
        });
    });
}());
