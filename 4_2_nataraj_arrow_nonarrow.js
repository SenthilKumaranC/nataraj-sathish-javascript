            function add () {
                console.log(this);

                const addArrow =  () => {
                    console.log(this);
                    //return a+b;
                }  
                
                addArrow(5,6)

                //return a+b;
            }
            add(2,3);  

            class newClass {
                name = "Nataraj";
                printAge()
            }

