import { Configuration } from '@midwayjs/decorator';
import * as orm from '@midwayjs/orm';
import { join } from 'path';

@Configuration({
  imports: [orm],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerConfiguratin {}
