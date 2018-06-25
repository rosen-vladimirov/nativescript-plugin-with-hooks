import { Observable } from 'tns-core-modules/data/observable';
import { PluginWithHooks } from 'nativescript-plugin-with-hooks';

export class HelloWorldModel extends Observable {
  public message: string;
  private pluginWithHooks: PluginWithHooks;

  constructor() {
    super();

    this.pluginWithHooks = new PluginWithHooks();
    this.message = this.pluginWithHooks.message;
  }
}
