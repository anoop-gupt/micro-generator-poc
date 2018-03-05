/**
 *
 * @param plop - accepts the plop object as its first parameter
 * The plop object exposes the plop api object which contains the setGenerator(name, config) function.
 */

// import { isEmpty } from lodash;

// // custome validate method
// const isNotEmptyFor = ( name ) => {
//     return ( value ) => {
//         if ( isEmpty( value ) ) return name + " is required";
//         return true;
//     }
// }

module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('react-class', {
        description: 'react class component',
        prompts: [{
            type: 'input',
            name: 'componentName',
            // validate: isNotEmptyFor( "name" ),
            message: 'component name please',
            default: 'MyComponent'
        }], // array of inquirer prompts
        actions: [
            {
            type: 'add',
            path: 'app/{{componentName}}.jsx',
            templateFile: 'plop-templates/react-class-component.hbs'
        }
        //     {
        //         type: "add",
        //         path: "app/tests/{{name}}.spec.js",
        //         templateFile: "plop-templates/component-spec.hbs"
        //     }
        ]  // array of actions
    });
};