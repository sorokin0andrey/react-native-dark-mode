import { NativeModule } from './native-module';
import { initialMode } from './initial-mode';
export const getCurrentMode = () => {
    if (__DEV__ && !global.nativeExtensions && !global.nativeCallSyncHook && !global.RN$Bridgeless) {
        // Hard code initial mode when using the async debugger as
        // sync calls aren't supported
        return initialMode;
    }
    return NativeModule.getCurrentMode();
};
//# sourceMappingURL=current-mode.js.map