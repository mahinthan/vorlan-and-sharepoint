module VORLON.WebStandards.Rules.Files {
    var cssFilesLimit = 5;
    var scriptsFilesLimit = 5;
    
    export var filesBundle = <IFileRule>{
        id: "performances.bundles",
        title: "try bundling your files",
        description: "Multiple http requests makes your site slower, especially on mobile devices",
       
        check: function(rulecheck: any, analyzeSummary: any) {
            rulecheck.items = rulecheck.items || [];
            rulecheck.type = "blockitems";    
            var countStylesheets = 0;
            for (var n in analyzeSummary.files.stylesheets){  
                var isVorlonInjection = n.toLowerCase().indexOf("vorlon/plugins") >= 0;    
                if (!isVorlonInjection)          
                    countStylesheets++;
            }
            
            if (countStylesheets > cssFilesLimit){
                rulecheck.failed = true;
                rulecheck.items.push({
                    title : "You have more than " + cssFilesLimit + " stylesheets in your page, consider bundling your stylesheets."
                });
            }
            
            var countScripts = 0;
            for (var n in analyzeSummary.files.scripts){
                var isVorlonInjection = n.toLowerCase().indexOf("vorlon/plugins") >= 0;    
                if (!isVorlonInjection)          
                    countScripts++;
            }
            
            if (countScripts > scriptsFilesLimit){
                rulecheck.failed = true;
                rulecheck.items.push({
                    title : "You have more than " + scriptsFilesLimit + " scripts files in your page, consider bundling your scripts."
                });
            }
        }
    }
}
