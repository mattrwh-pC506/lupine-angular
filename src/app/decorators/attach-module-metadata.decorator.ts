import "reflect-metadata";

function attachModuleMetadataFactory(target: any) {
    let a = () => { };
    let annotations = Reflect.getMetadata("annotations", target);
    target.__IMPORTS__ = annotations[0].imports;
    target.__DECLARATIONS__ = annotations[0].declarations;
    target.__PROVIDERS__ = annotations[0].providers;
    return target;
};

export { attachModuleMetadataFactory as AttachModuleMetadata };
