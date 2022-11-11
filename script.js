handlers.getBaseCharacters = function (args) {
    var result = server.GetTitleData({
        Keys: ["Characters", "Abilities"],
    });

    var characters = result.Data["Characters"];
    var abilities = result.Data["Abilities"];

    var parsedCharacters = JSON.parse(characters);
    var parsedAbilities = JSON.parse(abilities);

    // log.info(parsedCharacters);
    // log.info(parsedAbilities);

    var engineer = parsedCharacters[2];
    // log.info(engineer);

    var options = [];

    for (const key in parsedCharacters) {
        var chr = parsedCharacters[key];
        var chrAbilities = chr.abilities;

        if (chrAbilities) {
            for (const key2 in chrAbilities) {
                var ab = chrAbilities[key2];
                var baseAbility = parsedAbilities.find(el => el.id == ab.id)
                chr.abilities[key2].details = baseAbility;
            }
        }

        var id = chr.id;
        options[key] = chr;
    }

    return options;
}

handlers.createUserCharacter = function (args, type) {
    var a = handlers.getBaseCharacters();

    return a;
}