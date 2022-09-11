import {
  ALL,
  Body,
  Controller,
  Get,
  Post,
  Provide,
  Query,
} from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/get')
  async home() {
    return 'Hello Midwayjs!';
  }

  @Post('/update')
  async updateData() {
    return 'This is a post method';
  }

  @Get('/')
  async getId(@Query() id: number) {
    return id;
  }

  @Get('/change-param')
  async getUid(@Query('id') uid: number) {
    return uid;
  }

  @Get('/get-all')
  async getAll(@Query(ALL) queryObj: object) {
    return queryObj;
  }

  @Post('/get-body')
  async getBody(@Body() str: string) {
    return str;
  }
}
