export interface Command {
  name: string
  path: string
  icon?: string
  acronym?: string // 英文首字母缩写（用于搜索）
  targetPath?: string // 快捷方式的目标路径（如 cmd.exe），用于搜索
  englishName?: string // 快捷方式的英文名（如 Remote Desktop Connection），用于搜索
  englishAcronym?: string // 英文名的首字母缩写（如 rdc），用于搜索
}

export interface AppScanner {
  scanApplications(): Promise<Command[]>
}
