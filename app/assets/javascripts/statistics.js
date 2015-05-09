function statistics() {
  var Systems = ["linux", "linux64", "win", "win64", "mac"];
  if(window.data){
    var first_data = window.data[window.stats.first];
    var last_data = window.data[window.stats.last];
    Systems.forEach(function(e,i,a){
      window.stats["delta_"+e] = ((last_data[e]-first_data[e])/first_data[e])
    });
    Systems.forEach(function(e,i,a){
      window.stats["maxima_"+e] = (last_data[e] == window.stats["max_"+e])
    });
  }
  Systems.forEach(function(e,i,a){
    window.stats["missing_"+e] = (window.stats.count-window.stats["count_"+e])
  });

  var table = $('<table></table>').addClass('hidden');
  table.append($('<thead><tr><td></td>'+Systems.reduce(function(p,e,i,a){return p+'<td>'+e+'</td>'},'')+'</tr></thead>'));
  ["max","min","slope","delta","maxima","missing"].forEach(function(l,i,a){
      var row = $('<tr><td>'+l+'</td>'+Systems.reduce(function(p,e,i,a){
          return p+'<td>'+window.stats[l+'_'+e]+'</td>'
      },'')+'</tr>');
      table.append(row);
  });

  $('#here_table').append(table);
}
