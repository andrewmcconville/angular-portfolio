angular
	.module('portfolio')
    .factory('Works', function(){
        var allWorks = [
            {
                name: "Mesmer Infographic",
                category: "infographic",
                excerpt: "Information gathering on the viability and need for interactive degree tracking software.",
                introduction: "Degree planning has yet to be modernized and is still largely done with pen and paper. Many students even choose to rely solely on what their advisers recommend, which can vary widely given that more than 75% of students will have multiple advisers over the course of their education. The data gathered in this infographic was used to determine the need for a degree planning web app and if students has access to the technology required to use the app.",
                date: 1348462800000,
                url: "mesmer-infographic",
                defaultImage: "2013/10/mesmer-infographic",
                images: [
                    {
                        src: "2013/10/mesmer-infographic.jpg",
                        caption: "The information in this infographic was compiled from a student survey I conducted with over 250 participants. The information was used to gauge the need of an interactive degree planning web app",
                        height: 3200
                    },
                    {
                        src: "2013/10/mesmer-degree-planning-software.jpg",
                        caption: "About one third of students use UWM’s PAWS software to plan their degree, but the software is not kept up to date and the interface often confuses students. This results in students taking courses that don’t count toward their degree, delaying graduation.",
                        height: 751
                    },
                    {
                        src: "2013/10/mesmer-advisor.jpg",
                        caption: "Only about two thirds of students meet with their advisers on a regular basis.",
                        height: 750
                    },
                    {
                        src: "2013/10/mesmer-technology.jpg",
                        caption: "Not surprisingly, students own, a wide variety of technology. Most own a laptop and a smart phone or tablet.",
                        height: 750
                    }
                ]
            },
            {
                name: "Personal Timeline",
                category: "infographic",
                excerpt: "Income and expense vs hours worked and credits enrolled.",
                introduction: "The Personal Timeline infographic displays income and employment along side expenses and enrolled college credits. Narrative and metaphor created with plant imagery were used to convey a sense of time and growth.",
                date: 1308373200000,
                url: "personal-timeline-infographic",
                defaultImage: "2011/12/personal-timeline",
                images: [
                    {
                        src: "2011/12/personal-timeline.png",
                        caption: "13 year snapshot of work and school with imagery on left building metaphoric narrative.",
                        height: 2318
                    },
                    {
                        src: "2011/12/personal-timeline-scale.png",
                        caption: "Scale, top showing estimated yearly expenses and semester credit hours enrolled at a given month.",
                        height: 1000
                    },
                    {
                        src: "2011/12/personal-timeline-key.png",
                        caption: "Graph key resembling a planted pot.",
                        height: 1000
                    }
                ]
            },
            {
                name: "Mesmer",
                category: "interface",
                excerpt: "Interactive, drag and drop, web-app providing students real-time data manipulation.",
                date: 1348722000000,
                url: "mesmer-interactive-degree-builder",
                defaultImage: "2012/09/mesmer",
                images: [
                    {
                        src: "2012/09/mesmer-ipad.jpg",
                        caption: "Mesmer Interactive Degree Builder iPad interface",
                        height: 1174
                    },
                    {
                        src: "2012/09/mesmer-sidebar.jpg",
                        caption: "Slide out sidebar containing the university course catalog. Departments and courses are quickly searchable via filtering search field.",
                        height: 1174
                    }
                ]
            },
            {
                name: "Census Viewer",
                category: "interface",
                excerpt: "Interactive infographic to U.S. census API in HTML, CSS & JS.",
                date: 1368939600000,
                url: "u-s-census-data-viwer",
                defaultImage:  "2013/05/census-data"
            },
            {
                name: "Demographics Supersized",
                category: "infographic",
                excerpt: "City demographics in Milwaukee vs McDonald’s spatial density.",
                introduction: "Demographics supersized is an infographic comparing the income, education, unemployment and crime rates of the cities in Milwaukee county along side the geographical locations of McDonald’s restaurants.",
                date: 1308978000000,
                url: "demographics-supersized-infographic",
                defaultImage: "2011/12/demographics-supersized-infographic",
                images: [
                    {
                        src: "2011/12/demographics-supersized-infographic.png",
                        caption: "Demographics supersized infographic overview.",
                        height: 1000
                    },
                    {
                        src: "2011/12/demographics-supersized-infographic-graphs.png",
                        caption: "City demographics as bar graph placed side by side for fast comparison.",
                        height: 1000
                    },
                    {
                        src: "2011/12/demographics-supersized-infographic-city-data.png",
                        caption: "McDonald's locations compared to Milwaukee county city demographics.",
                        height: 1000
                    },
                    {
                        src: "2011/12/demographics-supersized-infographic-national-state.png",
                        caption: "U.S. and Wisconsin demographic comparison.",
                        height: 1000
                    }
                ]
            },
            {
                name: "Energy Life Cycle of Coal",
                category: "infographic",
                excerpt: "Visualizing the movement and consumption of coal reserves.",
                introduction: "The Great Lakes infographic highlights the lifecycle of coal, from extraction to use, and the dependency of the Great Lakes states on Wyoming coal. The map of Wyoming and the Great Lakes connected by railways creates a narrative of process and shows dependency from one region to another. Color is used heavily to unite spatially diffused data objects; connecting, for example, red colored power plant locations on the map to red data relating to power production.",
                date: 1324447200000,
                url: "energy-life-cycle-of-coal-infographic",
                defaultImage: "2011/12/great-lakes-infographic",
                images: [
                    {
                        src: "2011/12/great-lakes-infographic.png",
                        caption: "Infographic on Great Lakes coal energy use.",
                        height: 844
                    },
                    {
                        src: "2011/12/great-lakes-infographic-powder-river-basin.png",
                        caption: "Coal life-cycle shown as 4 step narrative.",
                        height: 1000
                    },
                    {
                        src: "2011/12/great-lakes-infographic-coal-sources.png",
                        caption: "Wyoming's Powder River Basin leads coal extraction in U.S.",
                        height: 800
                    },
                    {
                        src: "2011/12/great-lakes-infographic-electricity-from-coal.png",
                        caption: "Circular bar graph showing Indiana as top Great Lake coal user.",
                        height: 800
                    },
                    {
                        src: "2011/12/great-lakes-infographic-food-carbon.png",
                        caption: "Food groups with highest carbon footprint.",
                        height: 800
                    },
                    {
                        src: "2011/12/great-lakes-infographic-city-data.png",
                        caption: "Data featuring energy use by metropolitan area.",
                        height: 1000
                    }
                ]
            },
            {
                name: "Brain Brawn & Body",
                category: "interface",
                excerpt: "Designed, prototyped and programmed swipe menu interactions.",
                date: 1373173200000,
                url: "brain-brawn-body",
                defaultImage: "2013/07/brain-brawn-body"
            },
            {
                name: "UWM Mobile",
                category: "interface",
                excerpt: "Designed UI, UX and interactions along with in app prototyping.",
                date: 1379912400000,
                url: "uwm-mobile",
                defaultImage: "2013/10/uwm-mobile"
            }
        ];

        allWorks = allWorks.sort(function(a, b) {
            return b.date - a.date;
        });

        var works = allWorks;

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
                } else {
                    return works[works.length - 1].url
                }
            },
            getNextURL: function(index){
                if(works[index + 1]){
                    return works[index + 1].url
                } else {
                    return works[0].url
                }
            },
            getWorks: function(category){
                if(category){
                    works = [];

                    for(var i = 0; i < allWorks.length; i++){
                        if(allWorks[i].category === category){
                            works.push(allWorks[i]);
                        }

                    }
                }

                return works;
            }
        }
    });