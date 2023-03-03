const familiarService  = require('../service/familiar.service');

class FamiliarController {

    async getFamiliares() {
        
        return await familiarService.getFamiliares();
    }

    async createFamiliar(familiar) {
        
        return await familiarService.createFamiliar(familiar);
    }

    async updateFamiliar(familiar) {

        return await familiarService.updateFamiliar(familiar);
    }

    async deleteFamiliar(familiarId) {

        return await familiarService.deleteFamiliar(familiarId);
    }
}
module.exports = new FamiliarController();