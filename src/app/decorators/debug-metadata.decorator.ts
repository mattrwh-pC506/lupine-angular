import "reflect-metadata";


function debugMetadataFactory(target: any) {
    let keys = Reflect.getMetadataKeys(target);
    let metadata: any = {};
    keys.forEach((key) => {
        metadata[key] = Reflect.getMetadata(key, target);
    });
    console.table(metadata);
}

export { debugMetadataFactory as DebugMetadata };
