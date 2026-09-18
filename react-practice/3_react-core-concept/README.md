* Access form data using onSubmit and e target
* use form action formData and controlled component
* controlled and uncontrolled ways to collect form data 
* use custom hook to reduce duplication of code
* create product form and collect product data

* Context api
**create context**
``` export const AssetContext = createContext("");

**use context**
``` <AssetContext.provider value={asset}> component </AssetContext.provider>

**resive context**
``` const newAsset = useContext(AssetContext)