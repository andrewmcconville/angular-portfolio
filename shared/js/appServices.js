angular
	.module('portfolio')
    .factory('Works', function(){
        var works = [
            {
                name: "Mesmer",
                category: "interface",
                excerpt: "Interactive, drag and drop, web-app providing students real-time data manipulation.",
                date: 1348722000000,
                url: "mesmer-interactive-degree-builder",
                poster: {
                    src: "2012/09/mesmer",
                    height: 230
                },
                blur: "2012/09/mesmer",
                images: [
                    {
                        src: "2012/09/mesmer-ipad.jpg",
                        caption: "Mesmer Interactive Degree Builder iPad interface"
                    },
                    {
                        src: "2012/09/mesmer-sidebar.jpg",
                        caption: "Slide out sidebar containing the university course catalog. Departments and courses are quickly searchable via filtering search field."
                    }
                ]
            },
            {
                name: "Census Viewer",
                category: "interface",
                excerpt: "Interactive infographic to U.S. census API in HTML, CSS & JS.",
                url: "u-s-census-data-viwer",
                poster: {
                    src: "2013/05/census-data",
                    height: 260
                }
            },
            {
                name: "Demographics Supersized",
                category: "infographic",
                excerpt: "City demographics in Milwaukee vs McDonald’s spatial density.",
                date: 1308978000000,
                url: "demographics-supersized-infographic",
                poster: {
                    src: "2011/12/demographics-supersized-infographic",
                    height: 210
                },
                blur: "2011/12/demographics-supersized-infographic",
                images: [
                    {
                        src: "2011/12/demographics-supersized-infographic.png",
                        caption: "Demographics supersized infographic overview."
                    },
                    {
                        src: "2011/12/demographics-supersized-infographic-graphs.png",
                        caption: "City demographics as bar graph placed side by side for fast comparison."
                    },
                    {
                        src: "2011/12/demographics-supersized-infographic-city-data.png",
                        caption: "McDonald's locations compared to Milwaukee county city demographics.."
                    },
                    {
                        src: "2011/12/demographics-supersized-infographic-national-state.png",
                        caption: "U.S. and Wisconsin demographic comparison."
                    }
                ]
            },
            {
                name: "Energy Life Cycle of Coal",
                category: "infographic",
                excerpt: "Visualizing the movement and consumption of coal reserves.",
                date: 1324447200000,
                url: "energy-life-cycle-of-coal",
                poster: {
                    src: "2011/12/great-lakes-infographic",
                    height: 190
                },
                blur: "2011/12/great-lakes-infographic",
                images: [
                    {
                        src: "2011/12/great-lakes-infographic.png",
                        caption: "Infographic on Great Lakes coal energy use."
                    },
                    {
                        src: "2011/12/great-lakes-infographic-powder-river-basin.png",
                        caption: "Coal life-cycle shown as 4 step narrative."
                    },
                    {
                        src: "2011/12/great-lakes-infographic-coal-sources.png",
                        caption: "Wyoming's Powder River Basin leads coal extraction in U.S."
                    },
                    {
                        src: "2011/12/great-lakes-infographic-electricity-from-coal.png",
                        caption: "Circular bar graph showing Indiana as top Great Lake coal user."
                    },
                    {
                        src: "2011/12/great-lakes-infographic-food-carbon.png",
                        caption: "Food groups with highest carbon footprint."
                    },
                    {
                        src: "2011/12/great-lakes-infographic-city-data.png",
                        caption: "Data featuring energy use by metropolitan area."
                    }
                ]
            },
            {
                name: "Brain Brawn & Body",
                category: "interface",
                excerpt: "Designed, prototyped and programmed swipe menu interactions.",
                url: "brain-brawn-body",
                poster: {
                    src: "2013/07/brain-brawn-body",
                    height: 430
                }
            },
            {
                name: "UWM Mobile",
                category: "interface",
                excerpt: "Designed UI, UX and interactions along with in app prototyping.",
                url: "uwm-mobile",
                poster: {
                    src: "2013/10/uwm-mobile",
                    height: 400
                }
            }
        ];

        return {
            getWork: function(url){
                var index = works.map(
                    function(works){ return works.url; }
                ).indexOf(url);

                return {
                    work: works[index],
                    index: index
                };
            },
            getPreviousURL: function(index){
                if(works[index - 1]){
                    return works[index - 1].url
                }
            },
            getNextURL: function(index){
                if(works[index + 1]){
                    return works[index + 1].url
                }
            },
            getWorks: function(){
                return works;
            }
        }
    });