import { Device } from '../model/device.model';

export function validDevice(input: Device ){
  return input.name.length > 3 
}