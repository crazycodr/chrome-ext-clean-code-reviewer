import { MenuItemIdRepository } from '../../src/menuItems/menuItemRepository'
import { MenuItemIdAlreadyExistsError } from '../../src/menuItems/MenuItemIdAlreadyExistsError'
import { MenuItemIdDoesntExistsError } from '../../src/menuItems/menuItemIdDoesntExistsError'

describe('menuItemRepository', () => {
  it('should report menu item id doesn\'t exist', () => {
    const repo = new MenuItemIdRepository()
    expect(repo.has('non-existent')).toBe(false)
  })

  it('should report menu item id exists when it was added', () => {
    const repo = new MenuItemIdRepository()
    repo.create('existent', 1)
    expect(repo.has('existent')).toBe(true)
  })

  it('should return the same id when created', () => {
    const repo = new MenuItemIdRepository()
    expect(repo.create('existent', 1)).toBe(1)
  })

  it('should throw MenuItemIdAlreadyExists exception when duplicate key is found', () => {
    const repo = new MenuItemIdRepository()
    repo.create('existent', 1)
    expect(() => repo.create('existent', 1)).toThrowError(MenuItemIdAlreadyExistsError)
  })

  it('should return the same id when created', () => {
    const repo = new MenuItemIdRepository()
    expect(repo.create('existent', 1)).toBe(1)
  })

  it('should return the same id created with when gotten', () => {
    const repo = new MenuItemIdRepository()
    repo.create('existent', 1)
    expect(repo.get('existent')).toBe(1)
  })

  it('should throw error if the key doesn\'t exist', () => {
    const repo = new MenuItemIdRepository()
    expect(() => repo.get('non-existent')).toThrowError(MenuItemIdDoesntExistsError)
  })
})
