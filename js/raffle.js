/**
 * @Author: Bernard Hanna
 * @Date:   2023-02-02 13:06:22
 * @Last Modified by:   Bernard Hanna
 * @Last Modified time: 2023-02-02 14:07:23
 */
$(document).ready(function () {
  Raffle.setup();
});

var Raffle = {
  contestants: new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'),
  winner: null,

  setup: function () {
    $('#chooseit').live('click', Raffle.on_choose);
  },

  on_choose: function () {
    Raffle.insert_previous_winner_into_list();
    $('#chooser, #chooseit').hide();
    $('#chooser h1').html("Drawing tickets.....");
    $('#chooser').fadeIn();
    setTimeout('Raffle.pick_winner()', 1600);
    return false;
  },

  pick_winner: function () {
    $('#chooser').hide();
    var randomnumber = Math.floor(Math.random() * Raffle.contestants.length);
    Raffle.winner = Raffle.contestants.splice(randomnumber, 1);
    Raffle.display_winner();
  },

  insert_previous_winner_into_list: function () {
    if (Raffle.winner) {
      $('#winners ol').append("<li>Ticket Number: " + Raffle.winner + "</li>");
    }
  },

  display_winner: function () {
    $('#chooser h1').html(Raffle.winner + "!");
    $('#chooseit span').html("Let's see who's next!");
    $('#chooseit').show();
    $('#chooser').fadeIn();
  }

};
