import Res from '../utils/Res.js';
import { SteamService } from '../container.js';

const UserController = {
    index(ctx) {
        Res.json(ctx, { foo: 2 });
    },

    async getUser(ctx) {
        if (ctx.params && ctx.params.identifier) {
            const identifier = ctx.params.identifier;

            try {
                const steamid = await SteamService.getSteamID(identifier);
                Res.json(ctx, { steamid })
            } catch(e) {
                throw e;
            }
        }
    }
}

export default UserController;