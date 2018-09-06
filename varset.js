class Varset {

    constructor(data = {}) {
        this.data = data;
        this.updateInstances();
    }

    updateInstances(key = null) {
        // if key is defined
        if (key) {
            var keys = [key];
        // if no key is defined, update all keys
        } else {
            keys = Object.keys(this.data);
        }
        // iterate through keys
        keys.forEach(key => {
            // get instances
            var instances = document.querySelectorAll('[data-var="'+key+'"]');
            // iterate through each instance
            instances.forEach(element => {
                // update value
                element.innerHTML = this.getVariable(key);
            }); 
        });
    }

    getVariable(key) {
        return this.data[key];
    }

    setVariable(key, value) {
        this.data[key] = value;
        this.updateInstances(key);
    }

}