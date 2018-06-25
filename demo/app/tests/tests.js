var PluginWithHooks = require("nativescript-plugin-with-hooks").PluginWithHooks;
var pluginWithHooks = new PluginWithHooks();

describe("greet function", function() {
    it("exists", function() {
        expect(pluginWithHooks.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(pluginWithHooks.greet()).toEqual("Hello, NS");
    });
});