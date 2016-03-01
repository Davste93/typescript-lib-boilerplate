// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/31bfa9579b58e72f03941d4dbc9ebc6076139990/inversify/inversify.d.ts
// Type definitions for inversify 1.0.0
// Project: https://github.com/inversify/InversifyJS
// Definitions by: inversify <https://github.com/inversify>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module inversify {
  
  interface TypeBindingInterface<TServiceType> {
    runtimeIdentifier : string;
    implementationType : { new(): TServiceType ;};
    cache : TServiceType;
    scope : number; // TypeBindingScopeEnum
  }

  interface KernelInterface {
    bind(typeBinding : TypeBindingInterface<any>) : void;
    unbind(runtimeIdentifier : string) : void;
    unbindAll() : void;
    resolve<TImplementationType>(runtimeIdentifier : string) : TImplementationType;
  }

  enum TypeBindingScopeEnum {
      Transient = 0,
      Singleton = 1,
  }

  class TypeBinding<TServiceType> implements TypeBindingInterface<TServiceType> {
      runtimeIdentifier: string;
      implementationType: {
          new (): TServiceType;
      };
      cache: TServiceType;
      scope: TypeBindingScopeEnum;
      constructor(runtimeIdentifier: string, implementationType: {
          new (...args: any[]): TServiceType;
      }, scopeType?: TypeBindingScopeEnum);
  }

  class Kernel implements KernelInterface {
      private _bindings;
      bind(typeBinding: TypeBindingInterface<any>): void;
      unbind(runtimeIdentifier: string): void;
      unbindAll(): void;
      resolve<TImplementationType>(runtimeIdentifier: string): TImplementationType;
      private _validateBinding(typeBinding);
      private _getConstructorArguments(func);
      private _injectDependencies<TImplementationType>(func);
      private _construct<TImplementationType>(constr, args);
      constructor();
  }
}