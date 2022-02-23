import NestedCategoryBasedSubMenuItemGenerator from '../../src/generators/generateSubMenuItemsFromCategories'
import { createSubMenuItem } from '../../src/menuItems/createSubMenuItem'
import { MenuItemIdRepository } from '../../src/menuItems/menuItemRepository'

// The mock factory returns the function () => false
jest.mock('../../src/menuItems/createSubMenuItem')

describe('generateSubMenuItemsFromCategories', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should call createSubMenuItem once for 1 level deep categories', () => {
    const generator = new NestedCategoryBasedSubMenuItemGenerator(new MenuItemIdRepository())
    generator.generateSubMenuItemsFromCategories(1, [
      'category1',
      'category2'
    ])
    expect(createSubMenuItem).toBeCalledWith(1, 'category1')
    expect(createSubMenuItem).toBeCalledWith(1, 'category2')
  })

  it('should call createSubMenuItem twice and pass the new parent id (2) for 2 level deep categories', () => {
    const mockedCreateSubMenuItem = createSubMenuItem as jest.MockedFunction<typeof createSubMenuItem>
    mockedCreateSubMenuItem
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)

    const generator = new NestedCategoryBasedSubMenuItemGenerator(new MenuItemIdRepository())
    generator.generateSubMenuItemsFromCategories(1, [
      'category1/sub-category11'
    ])
    expect(createSubMenuItem).toBeCalledWith(1, 'category1')
    expect(createSubMenuItem).toBeCalledWith(2, 'sub-category11')
  })

  it('should call createSubMenuItem thrice and pass the new parent id (2, 3) for 3 level deep categories', () => {
    const mockedCreateSubMenuItem = createSubMenuItem as jest.MockedFunction<typeof createSubMenuItem>
    mockedCreateSubMenuItem
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4)

    const generator = new NestedCategoryBasedSubMenuItemGenerator(new MenuItemIdRepository())
    generator.generateSubMenuItemsFromCategories(1, [
      'category1/sub-category11/sub-sub-category111'
    ])
    expect(createSubMenuItem).toBeCalledWith(1, 'category1')
    expect(createSubMenuItem).toBeCalledWith(2, 'sub-category11')
    expect(createSubMenuItem).toBeCalledWith(3, 'sub-sub-category111')
  })

  it('reuses previous parents for multiple categories of multiple levels', () => {
    const mockedCreateSubMenuItem = createSubMenuItem as jest.MockedFunction<typeof createSubMenuItem>
    mockedCreateSubMenuItem
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4)

    const generator = new NestedCategoryBasedSubMenuItemGenerator(new MenuItemIdRepository())
    generator.generateSubMenuItemsFromCategories(1, [
      'category1/sub-category11/sub-sub-category111',
      'category1/sub-category11/sub-sub-category112',
      'category1/sub-category11/sub-sub-category113'
    ])
    expect(createSubMenuItem).toHaveBeenNthCalledWith(1, 1, 'category1')
    expect(createSubMenuItem).toHaveBeenNthCalledWith(2, 2, 'sub-category11')
    expect(createSubMenuItem).toHaveBeenNthCalledWith(3, 3, 'sub-sub-category111')
    expect(createSubMenuItem).toHaveBeenNthCalledWith(4, 3, 'sub-sub-category112')
    expect(createSubMenuItem).toHaveBeenNthCalledWith(5, 3, 'sub-sub-category113')
  })
})
