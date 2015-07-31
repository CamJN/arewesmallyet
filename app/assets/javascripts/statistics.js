function statistics() {
  var Systems = ["linux", "linux64", "win", "win64", "mac"];
  if(window.data){
    var first_data = window.data[window.stats.first];
    var last_data = window.data[window.stats.last];
    var win64Adjust = (new Date(window.stats.first_win64) - new Date(window.stats.first))/(1000*3600*24)
    Systems.forEach(function(e,i,a){
      window.stats["delta_"+e] = ((window.stats["max_"+e]-window.stats["min_"+e])/window.stats["min_"+e]).toFixed(1)+' ×';
      window.stats["maxima_"+e] = (last_data[e] == window.stats["max_"+e]);
      window.stats["missing_"+e] = (window.stats.count-window.stats["count_"+e]-(e!='win64'?0:win64Adjust));
      window.stats["max_"+e] = (window.stats["max_"+e]/(1024*1024)).toFixed(1)+' MB';
      window.stats["min_"+e] = (window.stats["min_"+e]/(1024*1024)).toFixed(1)+' MB';
      window.stats["slope_"+e] = window.stats["slope_"+e].toFixed(1)+' B/s';
    });

    var table = $('<table></table>').addClass('hidden');
    table.append($('<thead><tr><th></th>'+Systems.reduce(function(p,e,i,a){return p+'<th>'+e+'</th>'},'')+'</tr></thead>'));
    ["max","min","slope","delta","maxima","missing"].forEach(function(l,i,a){
      var row = $('<tr><th>'+l+'</th>'+Systems.reduce(function(p,e,i,a){
        return p+'<td>'+window.stats[l+'_'+e]+'</td>'
      },'')+'</tr>');
      table.append(row);
    });

    $('#here_table').append(table);
  }
}
