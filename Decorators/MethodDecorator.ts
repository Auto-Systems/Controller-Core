// Backend/src/modules/Controller/Decorators/MethodDecorator.ts
import {
  MethodDecoratorConfiguration,
  ControllerModule,
  ControllerMethodENUM,
} from '../types';

const methodNames = Object.fromEntries(
  Object.entries(ControllerMethodENUM),
) as { [key in ControllerMethodENUM]: string };

/*
const methodNames: MethodNames = {
  listNodes: 'listNodes',
  listNetworks: 'listNetworks',
  listStorage: 'listStorage',
  initController: 'initController',
  powerNode: 'powerNodes',
  listHosts: 'listHosts',
  createNode: 'createNode',
  loginController: 'loginController',
  listLibraries: 'listLibraries',
  listTemplates: 'listTemplates',
  getNodeInfo: 'getNodeInfo',
  getLibraryItem: 'getLibraryItem',
}; */

export const getMethod = <T extends keyof ControllerModule>(
  key: T,
  controller: { [key: string]: ControllerModule[T] },
): ControllerModule[T] => controller[methodNames[ControllerMethodENUM[key]]];

export const controllerMethod = (
  config: MethodDecoratorConfiguration,
): MethodDecorator => {
  return (target, propertyName, PropertyDescriptor) => {
    methodNames[config.type] = propertyName as string;
  };
};
