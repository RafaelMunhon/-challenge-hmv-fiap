import { FormGroup } from '@angular/forms';

export function encript({ formGroup }: { formGroup: FormGroup; }) {
  return btoa(formGroup.get('password')?.value);
}
