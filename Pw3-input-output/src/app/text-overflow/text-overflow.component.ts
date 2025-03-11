import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo = "o titulo";
  @Input() texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices finibus metus, in lobortis metus commodo eu. Vestibulum aliquet urna quis pellentesque luctus. Quisque tincidunt quis ante vel malesuada. Vivamus urna risus, pulvinar vel convallis eget, scelerisque varius dui. Proin interdum consectetur lorem in consequat. Morbi eros quam, malesuada ut odio sed, bibendum viverra nibh. Maecenas convallis sem eu massa pharetra, quis ullamcorper quam luctus. Aenean leo neque, mattis posuere elit eget, posuere eleifend ex. Vestibulum in felis felis. Nullam lorem nisl, tempor ac nibh in, ornare gravida nibh. Proin vel sem in eros convallis blandit ac sit amet nunc. Pellentesque vel sem et tortor pulvinar scelerisque sed nec lacus. Nam ornare nunc augue, at eleifend sapien vestibulum in.";
  @Input() clip : boolean = true;
}
