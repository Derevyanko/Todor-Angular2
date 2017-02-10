import { Component } from '@angular/core';

@Component({
    selector: 'fb-gplus-api',
    template: `
		<div class="fb-gplus-api">
			<button type="submit" class="btn btn-fb">Log in with Facebook</button>
			<button type="submit" class="btn btn-gplus">Sign in with Google +</button>
		</div>
    `
})
export class FbGplusApi {}