import { BrowserWindow } from 'electron'

/**
 * 应用窗口材质（Windows 11）
 *
 * @param win 目标窗口
 * @param material 材质类型 'mica' | 'acrylic' | 'none'
 */
export function applyWindowMaterial(
  win: BrowserWindow,
  material: 'mica' | 'acrylic' | 'none'
): void {
  if (!win || win.isDestroyed()) return

  const isWindows = process.platform === 'win32'

  switch (material) {
    case 'mica':
      try {
        if (isWindows) {
          win.setBackgroundColor('#00000000') // 先设置透明背景
        }
        win.setBackgroundMaterial('mica')
        // console.log(`✅ 窗口 ${win.id} Mica 材质已启用`)
      } catch (error) {
        console.error(`❌ 窗口 ${win.id} 设置 Mica 失败:`, error)
        win.setBackgroundColor('#f4f4f4')
      }
      break
    case 'acrylic':
      try {
        if (isWindows) {
          win.setBackgroundColor('#00000000') // 先设置透明背景
        }
        win.setBackgroundMaterial('acrylic')
        // console.log(`✅ 窗口 ${win.id} Acrylic 材质已启用`)
      } catch (error) {
        console.error(`❌ 窗口 ${win.id} 设置 Acrylic 失败:`, error)
        win.setBackgroundColor('#f4f4f4')
      }
      break
    case 'none':
    default:
      try {
        win.setBackgroundMaterial('none')
        win.setBackgroundColor('#f4f4f4')
        // console.log(`✅ 窗口 ${win.id} 已禁用窗口材质`)
      } catch (error) {
        console.error(`❌ 窗口 ${win.id} 设置背景失败:`, error)
      }
      break
  }
}
