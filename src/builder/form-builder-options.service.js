angular.module('mwFormBuilder')
    .constant('MW_QUESTION_TYPES', ['text', 'textarea', 'radio', 'checkbox', 'select', 'grid', 'priority', 'division', 'number', 'date', 'time', 'email', 'range', 'url'])
    .constant('MW_ELEMENT_TYPES', ['question', 'image', 'paragraph'])
    .constant('MW_GRID_CELL_INPUT_TYPES', ['radio', 'checkbox', 'text', 'number', 'date', 'time'])
    // Languages that are offered to create the survey in
    .constant('MW_QUESTION_LANGUAGES', ['en', 'af'])
    .factory('mwFormBuilderOptions', function mwFormBuilderOptionsFactory(MW_ELEMENT_TYPES, MW_QUESTION_TYPES, MW_QUESTION_LANGUAGES){

        var defaultElementButtonOptions={
            title: null,
            icon: null,
            text: null,
            callback: null,
            filter: null,
            showInOpen:false,
            showInPreview:true,
            cssClass: ''
        };

        var defaultCustomQuestionSelectOptions={
            key: null,
            label: null,
            selects: [],
            required: true
        };

        var defaultOptions={
            elementTypes: MW_ELEMENT_TYPES,
            questionTypes: MW_QUESTION_TYPES,
            // Languages offered for which the survey can be created
            surveyLanguages : MW_QUESTION_LANGUAGES,
            // The default language selected for the survey
            surveyLanguage : MW_QUESTION_LANGUAGES[0],
            elementButtons: [],
            pagesSize: [10,25,50,100],
            pageSize: 10,
            customQuestionSelects: [],
            customElements: [] //TODO
        };

        function extendOptionList(optionList, defaultItemOptions){
            if(!optionList){
                return [];
            }
            return optionList.map(function (itemOptions){
                return angular.extend({}, defaultItemOptions, itemOptions);
            });
        }

        var options = {

            $init: function(customOptions){
                angular.extend(options, defaultOptions, customOptions);
                options.customQuestionSelects = extendOptionList(options.customQuestionSelects, defaultCustomQuestionSelectOptions);
                options.elementButtons = extendOptionList(options.elementButtons, defaultElementButtonOptions);
                return options;
            }
        };


        return options;
    });
