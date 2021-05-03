function TodoStore(currentUser) {
 
    let todos = [];



    function add(todo) {

      let start = Date.now();

      if (currentUser.isAuthenticated()) {

        todos.push(todo);

      } else {

        throw "Not authorized to perform this operation";

      }

      let duration = Date.now() - start;

      console.log("add() duration : " + duration);

    }

    return Object.freeze({

      add

    });

  }
