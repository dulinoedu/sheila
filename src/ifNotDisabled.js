const ifNotDisabled = (_target, _propertyKey, descriptor) => {
  const substituted = descriptor.value ?? (() => undefined);

  Object.assign(descriptor, {
    async value(...args) {
      return this.disabled ? undefined : Reflect.apply(substituted, this, args);
    },
  });
};

export default ifNotDisabled;
