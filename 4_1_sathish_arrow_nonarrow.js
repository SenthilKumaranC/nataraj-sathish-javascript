
        const a =2;
        const b =3;
        function add()
        {

           // console.log("Inside regular function",arguments);

            const addArrow = () => {

            //  console.log("Inside Inside Arrow function",arguments);
              console.log("Inside Inside Arrow function",arguments);
            }
            addArrow();
          return arguments[0]+arguments[1];
        }

        add(a,b);

        const addArrow = () => {

        //  console.log("Inside Arrow function",arguments);
        }

        addArrow(4,5);

        class Animals
        {
          animalName= "cat";

          constructor() 
          {


          }

          animalBehaviour = () =>
          {
            console.log("I am a cat");
          }

        }

        const animals = new Animals();        

