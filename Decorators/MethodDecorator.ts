// Backend/src/modules/Controller/Decorators/MethodDecorator.ts
import {
  ControllerMethodENUM,
  ControllerModule,
  MethodDecoratorConfiguration,
} from '../types';

const methodNames = Object.fromEntries(
  Object.entries(ControllerMethodENUM),
) as { [key in ControllerMethodENUM]: string };

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
