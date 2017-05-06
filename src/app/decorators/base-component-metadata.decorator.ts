import "reflect-metadata";
import { ViewEncapsulation } from "@angular/core";
import * as _ from "lodash";

const baseAnnotation = {
    encapsulation: ViewEncapsulation.None,
};

function baseComponentMetadataFactory(target: any) {
    const targetAnnotations = Reflect.getMetadata('annotations', target);
    _.merge(_.head(targetAnnotations), baseAnnotation);
};

export { baseComponentMetadataFactory as BaseComponentMetadata };
