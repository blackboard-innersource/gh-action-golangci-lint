import {getInput, InputOptions} from '@actions/core/lib/core'

/**
 * Convert input from string into boolean.
 *
 * @param {string} name - Name of the input to get.
 * @param {InputOptions} options - Optional. See InputOptions.
 * @returns {boolean} - If the input is true or false.
 */
export function getInputBoolean(name: string, options?: InputOptions): boolean {
  return (getInput(name, options) || 'false').toUpperCase() === 'TRUE'
}
