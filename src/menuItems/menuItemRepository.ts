import { MenuItemIdAlreadyExistsError } from './MenuItemIdAlreadyExistsError'
import { MenuItemIdDoesntExistsError } from './menuItemIdDoesntExistsError'

export class MenuItemIdRepository {
    private items: Map<string, number> = new Map<string, number>();

    public has (key: string): boolean {
      return this.items.has(key)
    }

    public create (key: string, id: number): number {
      if (this.has(key)) {
        throw new MenuItemIdAlreadyExistsError()
      }
      this.items.set(key, id)
      return id
    }

    public get (key: string): number {
      if (!this.has(key)) {
        throw new MenuItemIdDoesntExistsError()
      }
      return <number> this.items.get(key)
    }
}
