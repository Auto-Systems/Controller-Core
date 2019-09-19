# Auto Deploy Controller Core
This is designed to be run inside of the Auto Deploy API

Auto Deploy Controller modules are the dynamically loaded in modules that are the connection between the API and the service that creates, deploys, and manages the nodes. The controller modules that I have created already are vCenter

## Controller Module Development
Your controller module needs to be a GIT repo with a package.json file, and a `Controller.ts` file.

You can export a class of anyname but it has to have the `@ControllerClass({ name: 'Example' })` decorator on it to be picked up by the Auto Deploy API.

Your class methods can be called anything but must have the `@controllerMethod({ type: 'listNodes' })` Decorator  with the type option of the decorator being the method you are creating.

Your class method must return the same data structure as indicated in `types.ts` to get an idea of what data you need to provide checkout the `TSExample` controller module. To get an idea of how to format the data you receive from your controller checkout the `vCenter` module