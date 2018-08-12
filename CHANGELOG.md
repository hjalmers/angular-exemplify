# [2.0.1] - 2017-08-23

### Fixed
- Removed dependencies to http service as it will be deprecated (improved support for angular 4.3+)

# [2.0.0] - 2017-03-28

### Breaking change
- `context` input must be declared like this `[context]="this"` in order for exemplify to be able to get markup through annotations (need for angular 4+ and typescript 2.2.0+).
- `nested` input has been removed as it's no longer needed.
- Link class names have been changed from `link-` to `exemplify-` ie. `link-copy` is now called `exemplify-copy`.

### Added
- Class to indicate if toggle code example is active or not, if active `exemplify-visible` will be added to link (see issue #5).

### Fixed
- Added `ngModel` to directives to be escaped (see issue #4)

# [1.2.0] - 2017-03-09

### Added
- Option for showing/hiding example by default (see issue #3), examples are now hidden by default override using `[show]=true`

### Fixed
- Option for passing strings to be escaped (see issue #1 and #2)
- Angular directives such as `*ngIf` and `*ngFor` will now be escaped

### Breaking change
- `angularInputs` changed to `escapeStrings` to accommodate for more use cases, so instead of typing `myInput` to escape the angular input `[myInput]` you now need to type `[myInput]`. This also works for `[(myInput)]` or `#myTemplateVar` (otherwise they will be rendered as `[(myinput)]` and `#mytemplatevar`). 

# [1.1.0] - 2017-01-19

### Breaking change
- Selector changed from `AddExample` to `exemplify`

### Added
- Option for passing angular inputs (see issue #1)
- Option for passing custom texts

### Fixed
- Layout when using bootstrap 4 alpha 6

# [1.0.0] - 2017-01-03

### Added
- Added show/hide toggle function

### Changed
- Behaviour for nested elements, ie. if element becomes nested due to `*ngIf` or other directives

# [1.0.0-rc.1] - 2017-01-03

### Added
- First version with documentation and examples
