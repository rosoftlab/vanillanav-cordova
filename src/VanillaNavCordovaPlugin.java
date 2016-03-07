package net.rosoftlab.nav.loader;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class VanillaNavCordovaPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

        if (action.equals("navigate")) {
            long venueId = data.getLong(0);
            long referenceId = data.getLong(1);
            boolean result = VanillaNav.navigate(cordova.getActivity(), venueId, referenceId);
            callbackContext.success(result ? "ok" : "market");
            return true;

        }
        return false;
    }
}
