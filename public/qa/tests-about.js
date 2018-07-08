suite('Test page "About..."', function(){
    test('page should contain a link to the page of contacts', function(){
        assert($('a[href="/contact"]').length);
    });
});