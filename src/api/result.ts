export interface Result{
  code:number
  message: string
  success: boolean
  type: 'success'|'error'|'warning'|'info'
  result: any
}
