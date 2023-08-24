var require = meteorInstall({"imports":{"ui":{"pages":{"collections":{"collections.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/pages/collections/collections.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  PelisCollection: () => PelisCollection,
  DescargasCollection: () => DescargasCollection,
  TVCollection: () => TVCollection,
  OnlineCollection: () => OnlineCollection,
  MensajesCollection: () => MensajesCollection,
  RegisterDataUsersCollection: () => RegisterDataUsersCollection,
  LogsCollection: () => LogsCollection,
  ServersCollection: () => ServersCollection,
  PreciosCollection: () => PreciosCollection,
  VentasCollection: () => VentasCollection,
  FilesCollection: () => FilesCollection,
  VersionsCollection: () => VersionsCollection,
  SchemaRegisterDataUsersCollection: () => SchemaRegisterDataUsersCollection,
  SchemaVentasCollection: () => SchemaVentasCollection,
  SchemaPreciosCollection: () => SchemaPreciosCollection,
  SchemaLogsCollection: () => SchemaLogsCollection,
  SchemaOnlineCollection: () => SchemaOnlineCollection,
  SchemaMensajesCollection: () => SchemaMensajesCollection,
  SchemaTVCollection: () => SchemaTVCollection,
  SchemaPelisCollection: () => SchemaPelisCollection,
  SchemaDescargaCollection: () => SchemaDescargaCollection,
  SchemaServersCollection: () => SchemaServersCollection,
  SchemaFilesCollection: () => SchemaFilesCollection
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
SimpleSchema.extendOptions(['autoform']);
const PelisCollection = new Mongo.Collection('pelisRegister');
const DescargasCollection = new Mongo.Collection('descargasRegister');
const TVCollection = new Mongo.Collection('tvRegister');
const OnlineCollection = new Mongo.Collection('online');
const MensajesCollection = new Mongo.Collection('mensajes');
const RegisterDataUsersCollection = new Mongo.Collection('registerDataUsers');
const LogsCollection = new Mongo.Collection('Logs');
const ServersCollection = new Mongo.Collection('servers');
const PreciosCollection = new Mongo.Collection('precios');
const VentasCollection = new Mongo.Collection('ventas');
const FilesCollection = new Mongo.Collection('files');
const VersionsCollection = new Mongo.Collection('versions');
Meteor.methods({
  exportDataTo(urlMongoDB) {
    return Promise.asyncApply(() => {
      var mi = require("mongoimport");

      try {
        Promise.await(mi({
          fields: PelisCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'pelisRegister',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: DescargasCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'descargasRegister',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: TVCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'tvRegister',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      } // try {
      //   await mi({
      //     fields: OnlineCollection.find().fetch(), // {array} data to import
      //     db: "meteor", // {string} name of db
      //     collection: 'online', // {string|function} name of collection, or use a function to
      //     //  return a name, accept one param - [fields] the fields to import
      //     host: urlMongoDB,
      //     callback: (err, db) => {
      //       err && console.error(err);
      //     },
      //   });
      // } catch (error) {
      //   console.log(error);
      // }


      try {
        Promise.await(mi({
          fields: MensajesCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'mensajes',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: RegisterDataUsersCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'registerDataUsers',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: LogsCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'Logs',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: ServersCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'servers',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: PreciosCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'precios',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: VentasCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'ventas',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: Meteor.users.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'users',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }

      try {
        Promise.await(mi({
          fields: FilesCollection.find().fetch(),
          // {array} data to import
          db: "meteor",
          // {string} name of db
          collection: 'files',
          // {string|function} name of collection, or use a function to
          //  return a name, accept one param - [fields] the fields to import
          host: urlMongoDB,
          callback: (err, db) => {
            err && console.error(err);
          }
        }));
      } catch (error) {
        console.log(error);
      }
    });
  }

});
const SchemaRegisterDataUsersCollection = new SimpleSchema({
  userId: {
    type: String,
    optional: false
  },
  fecha: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    },
    optional: true
  },
  vpnMbGastados: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  megasGastadosinBytes: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  megasGastadosinBytesGeneral: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  type: {
    type: String,
    defaultValue: "proxy",
    optional: false
  }
});
RegisterDataUsersCollection.attachSchema(SchemaRegisterDataUsersCollection);
const SchemaVentasCollection = new SimpleSchema({
  adminId: {
    type: String,
    optional: false
  },
  userId: {
    type: String,
    optional: false
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    },
    optional: false
  },
  cobrado: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  cobradoAlAdmin: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  precio: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  comentario: {
    type: String,
    optional: true
  },
  gananciasAdmin: {
    type: Number,
    defaultValue: 0,
    optional: true
  }
});
VentasCollection.attachSchema(SchemaVentasCollection);
const SchemaPreciosCollection = new SimpleSchema({
  userId: {
    type: String,
    optional: false
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    },
    optional: false
  },
  precio: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  type: {
    type: String,
    optional: false
  },
  megas: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  heredaDe: {
    type: String,
    optional: true,
    defaultValue: null
  },
  comentario: {
    type: String,
    optional: true
  },
  detalles: {
    type: String,
    optional: true
  }
});
PreciosCollection.attachSchema(SchemaPreciosCollection);
const SchemaLogsCollection = new SimpleSchema({
  type: {
    type: String
  },
  userAdmin: {
    type: String
  },
  userAfectado: {
    type: String
  },
  message: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  }
});
LogsCollection.attachSchema(SchemaLogsCollection);
const SchemaOnlineCollection = new SimpleSchema({
  address: {
    type: String
  },
  connectionId: {
    type: String,
    optional: true
  },
  userId: {
    type: String,
    optional: true
  },
  loginAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    },
    optional: true
  },
  hostname: {
    type: String,
    optional: true
  },
  megasGastadosinBytes: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  megasGastadosinBytesGeneral: {
    type: Number,
    defaultValue: 0,
    optional: true
  }
});
OnlineCollection.attachSchema(SchemaOnlineCollection);
const SchemaMensajesCollection = new SimpleSchema({
  from: {
    type: String
  },
  to: {
    type: String
  },
  mensaje: {
    type: String,
    optional: true
  },
  leido: {
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  type: {
    type: String,
    defaultValue: "text",
    optional: true
  }
});
MensajesCollection.attachSchema(SchemaMensajesCollection);
const SchemaTVCollection = new SimpleSchema({
  nombreTV: {
    type: String
  },
  urlTV: {
    type: String
  },
  urlBackground: {
    type: String,
    defaultValue: ""
  },
  descripcion: {
    type: String,
    defaultValue: ""
  },
  mostrar: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  vistas: {
    type: Number,
    defaultValue: 0
  }
});
TVCollection.attachSchema(SchemaTVCollection);
const SchemaPelisCollection = new SimpleSchema({
  nombrePeli: {
    type: String
  },
  urlPeli: {
    type: String
  },
  urlBackground: {
    type: String
  },
  descripcion: {
    type: String
  },
  urlTrailer: {
    type: String,
    defaultValue: "",
    optional: true
  },
  tamano: {
    type: String
  },
  mostrar: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  subtitulo: {
    type: String,
    defaultValue: "",
    optional: true
  },
  vistas: {
    type: Number,
    defaultValue: 0
  },
  year: {
    type: Number,
    defaultValue: 1900 // min: 1900,

  },
  textSubtitle: {
    type: String,
    defaultValue: "",
    optional: true
  },
  clasificacion: {
    type: Array,
    defaultValue: []
  },
  'clasificacion.$': {
    type: String
  },
  idimdb: {
    type: String,
    defaultValue: "",
    optional: true
  }
});
PelisCollection.attachSchema(SchemaPelisCollection);
const SchemaDescargaCollection = new SimpleSchema({
  idFile: {
    type: String
  },
  nombreFile: {
    type: String
  },
  tamanoFile: {
    type: String,
    defaultValue: "",
    optional: true
  },
  comentarios: {
    type: String,
    defaultValue: "",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  descargadoPor: {
    type: String
  },
  thumbnail: {
    type: String
  },
  urlReal: {
    type: String
  },
  url: {
    type: String,
    defaultValue: "",
    optional: true
  },
  vistas: {
    type: Number,
    defaultValue: 0
  }
});
DescargasCollection.attachSchema(SchemaDescargaCollection);
const SchemaServersCollection = new SimpleSchema({
  domain: {
    type: String
  },
  ip: {
    type: String
  },
  active: {
    type: Boolean,
    defaultValue: true,
    optional: true
  },
  details: {
    type: String,
    defaultValue: "",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  }
});
ServersCollection.attachSchema(SchemaServersCollection);
const SchemaFilesCollection = new SimpleSchema({
  nombre: {
    type: String,
    optional: false
  },
  url: {
    type: String,
    optional: false
  },
  details: {
    type: String,
    defaultValue: "",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  }
});
FilesCollection.attachSchema(SchemaFilesCollection);
FilesCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update() {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
LogsCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update() {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
RegisterDataUsersCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update() {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
OnlineCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update() {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return true;
  }

});
TVCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update() {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
PelisCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update() {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
DescargasCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
Meteor.users.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
VentasCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
MensajesCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return true;
  }

});
ServersCollection.allow({
  insert(doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return true;
  }

});
PreciosCollection.allow({
  insert(userId, doc) {
    // The user must be logged in and the document must be owned by the user.
    return true;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    return true;
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return Meteor.users.findOne({
      _id: userId
    }).profile.role == "admin";
  }

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},"server":{"Ejecutar.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/Ejecutar.js                                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
!function (module1) {
  var Promise = require('bluebird').Promise;

  var exec = require('child_process').exec; // retuen a promise(text)


  function execute(command) {
    var cmd = command;

    try {
      return new Promise(function (resolve, reject) {
        exec(cmd, function (error, stdout, stderr) {
          if (error) {
            reject(error);
          } else {
            resolve(stdout);
          }
        });
      });
    } catch (error) {
      return error.message;
    }
  }

  module.exports = execute;
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"metodos.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/metodos.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let execute;
module.link("./Ejecutar", {
  default(v) {
    execute = v;
  }

}, 2);
let OnlineCollection, PelisCollection, MensajesCollection, ServersCollection, PreciosCollection, VentasCollection, FilesCollection, VersionsCollection, LogsCollection, DescargasCollection, TVCollection, RegisterDataUsersCollection;
module.link("../imports/ui/pages/collections/collections", {
  OnlineCollection(v) {
    OnlineCollection = v;
  },

  PelisCollection(v) {
    PelisCollection = v;
  },

  MensajesCollection(v) {
    MensajesCollection = v;
  },

  ServersCollection(v) {
    ServersCollection = v;
  },

  PreciosCollection(v) {
    PreciosCollection = v;
  },

  VentasCollection(v) {
    VentasCollection = v;
  },

  FilesCollection(v) {
    FilesCollection = v;
  },

  VersionsCollection(v) {
    VersionsCollection = v;
  },

  LogsCollection(v) {
    LogsCollection = v;
  },

  DescargasCollection(v) {
    DescargasCollection = v;
  },

  TVCollection(v) {
    TVCollection = v;
  },

  RegisterDataUsersCollection(v) {
    RegisterDataUsersCollection = v;
  }

}, 3);

if (Meteor.isServer) {
  console.log("Cargando Métodos...");

  function streamToString(stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
      stream.on('error', err => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
  }

  Meteor.methods({
    execute: function (command) {
      return Promise.asyncApply(() => {
        try {
          let result = Promise.await(execute(command));
          return result;
        } catch (error) {
          console.log(error.message);
          return error.message;
        }
      });
    },
    getusers: function (filter) {
      return Meteor.users.find(filter ? filter : {}, {
        sort: {
          vpnip: 1
        }
      }).fetch();
    },
    setOnlineVPN: function (id, datachange) {
      return Meteor.users.update(id, {
        $set: datachange
      });
    },
    addUser: function (user) {
      try {
        let id = Accounts.createUser(user);
        return id ? "Usuario agregado correctamente!!!" : "";
      } catch (error) {
        return error;
      }
    },
    sendemail: function (user, text, subject) {
      let admin = Meteor.users.findOne({
        _id: user.bloqueadoDesbloqueadoPor,
        "profile.role": "admin"
      }); // let emails = (admin
      //   ? (admin.emails[0]
      //     ? (admin.emails[0].address
      //       ? ['carlosmbinf9405@icloud.com', admin.emails[0].address]
      //       : ['carlosmbinf9405@icloud.com'])
      //     : ['carlosmbinf9405@icloud.com']
      //   )
      //   : ['carlosmbinf9405@icloud.com'])

      let emails = admin && admin.emails[0] && admin.emails[0].address != "carlosmbinf@gmail.com" ? user.emails[0] && user.emails[0].address ? ["carlosmbinf@gmail.com", admin.emails[0].address, user.emails[0].address] : ["carlosmbinf@gmail.com", admin.emails[0].address] : user.emails[0] && user.emails[0].address && user.emails[0].address != "carlosmbinf@gmail.com" ? ["carlosmbinf@gmail.com", user.emails[0].address] : ["carlosmbinf@gmail.com"];

      require("gmail-send")({
        user: "carlosmbinf@gmail.com",
        pass: "Lastunas@123",
        to: emails,
        subject: subject
      })(text, (error, result, fullResult) => {
        if (error) console.error(error); // console.log(result);

        console.log(fullResult);
      });
    },
    sendMensaje: function (user, text, subject) {
      MensajesCollection.insert({
        from: user.bloqueadoDesbloqueadoPor ? user.bloqueadoDesbloqueadoPor : Meteor.users.findOne({
          username: Array(Meteor.settings.public.administradores)[0][0]
        })._id,
        to: user._id,
        mensaje: text.text
      }); // console.log(text);
    },
    insertPelis: function (pelicula) {
      return Promise.asyncApply(() => {
        // console.log(req)
        // console.log(peli)
        //  const insertPeli = async () => {
        let exist = Promise.await(PelisCollection.findOne({
          urlPeli: pelicula.peli
        }));
        let id = exist ? exist._id : Promise.await(PelisCollection.insert({
          nombrePeli: pelicula.nombre,
          urlPeli: pelicula.peli,
          urlBackground: pelicula.poster,
          descripcion: pelicula.nombre,
          tamano: 797,
          mostrar: true,
          subtitulo: pelicula.subtitle,
          year: pelicula.year
        }));
        let peli = Promise.await(PelisCollection.findOne({
          _id: id
        })); // console.log(peli);

        try {
          var srt2vtt = Promise.await(require("srt-to-vtt"));
          var fs = Promise.await(require("fs"));
          var appRoot = Promise.await(require("app-root-path"));
          var subtituloFile = appRoot.path + "/public/videos/subtitulo/" + id + ".vtt";
          const https = Promise.await(require("https")); // !fs.existsSync(appRoot.path + "/public/videos/subtitulo")
          //   ? fs.mkdirSync(appRoot.path + "/public/videos/subtitulo/")
          //   : "";
          // const file = fs.createWriteStream(subtituloFile);
          // /////////////////////////////////////////////

          peli && peli.subtitulo && Promise.await(https.get(peli.subtitulo, response => Promise.asyncApply(() => {
            try {
              var stream = response.pipe(srt2vtt()); // stream.on("finish", function () {});

              streamToString(stream).then(data => {
                data && PelisCollection.update({
                  _id: id
                }, {
                  $set: {
                    textSubtitle: data.toString("utf8")
                  }
                }, {
                  multi: true
                });
                console.log("Actualizado subtitulo de la Peli: ".concat(peli.nombrePeli));
              });
            } catch (error) {
              console.log(error.message);
            }
          })));

          const imdbId = require("imdb-id");

          const IMDb = require("imdb-light");

          let idimdb = Promise.await(imdbId(peli.nombrePeli)); // console.log("ID de IMDB => " + idimdb)

          PelisCollection.update({
            _id: id
          }, {
            $set: {
              idimdb: idimdb
            }
          }, {
            multi: true
          });
          Promise.await(IMDb.trailer(idimdb, url => {
            // console.log(url)  // output is direct mp4 url (also have expiration timeout)
            PelisCollection.update({
              _id: id
            }, {
              $set: {
                urlTrailer: url // clasificacion: details.Genres.split(", ")

              }
            });
          }));
          Promise.await(IMDb.fetch(idimdb, details => {
            // console.log(details)  // etc...
            PelisCollection.update({
              _id: id
            }, {
              $set: {
                descripcion: details.Plot,
                clasificacion: details.Genres.split(", ")
              }
            }, {
              multi: true
            });
          }));
          return {
            message: exist ? "Actualizada la Pelicula: ".concat(exist.nombrePeli) : "Se Insertó Correctamente la Película"
          };
        } catch (error) {
          console.log("--------------------------------------"); // console.log("error.error :> " + error.error);
          // console.log("error.reason :> " + error.reason);

          console.log("error.message :> ".concat(error.message, "\n\n              error.reason :> ").concat(error.reason)); // console.log("error.errorType :> " + error.errorType);

          console.log("--------------------------------------");
          return {
            reason: error.reason,
            message: error.message,
            errorType: error.type
          };
        }
      });
    },
    getListadosPreciosOficiales: () => Promise.asyncApply(() => {
      try {
        // let userAdmin = await Meteor.call('getAdminPrincipal');
        return Promise.await(PreciosCollection.find({}).fetch());
      } catch (error) {
        console.log(error);
      }
    }),
    getAdminPrincipal: () => Promise.asyncApply(() => {
      ///////REVISAR EN ADDVENTASONLY  el descuento que se debe de hacer
      // let admin = await Meteor.users.findOne(adminId)
      // let precio = PreciosCollection.findOne(precioid)
      try {
        let adminPrincipal = Promise.await(Meteor.users.findOne({
          username: Meteor.settings.public.administradores[0]
        }));
        return adminPrincipal ? adminPrincipal : null;
      } catch (error) {
        return error.message;
      }
    }),
    getPrecioOficial: compra => Promise.asyncApply(() => {
      try {
        let adminPrincipal = Promise.await(Meteor.users.findOne({
          username: Meteor.settings.public.administradores[0]
        }));
        let precioOficial = Promise.await(PreciosCollection.findOne({
          userId: adminPrincipal._id,
          type: compra.type,
          megas: compra.megas
        }));
        return precioOficial ? precioOficial : null;
      } catch (error) {
        return error.message;
      }
    }),
    addVentasOnly: (userChangeid, adminId, compra) => Promise.asyncApply(() => {
      ///////REVISAR EN ADDVENTASONLY  el descuento que se debe de hacer
      let userChange = Promise.await(Meteor.users.findOne(userChangeid)); // let admin = await Meteor.users.findOne(adminId)
      // let precio = PreciosCollection.findOne(precioid)

      let adminPrincipal = Promise.await(Meteor.users.findOne({
        username: Meteor.settings.public.administradores[0]
      }));
      let precioOficial = Promise.await(Meteor.call('getPrecioOficial', compra));

      try {
        compra && Promise.await(VentasCollection.insert({
          adminId: adminId,
          userId: userChangeid,
          precio: precioOficial ? precioOficial.precio : compra.precio,
          gananciasAdmin: precioOficial ? compra.precio - precioOficial.precio : 0,
          comentario: compra.comentario
        }));
        return compra ? compra.comentario : "No se encontro Precio a la oferta establecida en el usuario: ".concat(userChange.username);
      } catch (error) {
        return error.message;
      }
    }),
    addVentasProxy: (userChangeid, userId) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne(userChangeid));
      let user = Promise.await(Meteor.users.findOne(userId)); // let precio = PreciosCollection.findOne(precioid)

      let precio;
      Promise.await(userChange.isIlimitado) ? precio = Promise.await(PreciosCollection.findOne({
        userId: userId,
        type: "fecha-proxy"
      })) : precio = Promise.await(PreciosCollection.findOne({
        userId: userId,
        type: "megas",
        megas: userChange.megas
      }));

      try {
        if (!userChange.baneado) {
          Promise.await(Meteor.call("desabilitarProxyUser", userChangeid, userId));
          return null;
        } else if (precio || Array(Meteor.settings.public.administradores)[0].includes(user.username)) {
          Promise.await(Meteor.call("habilitarProxyUser", userChangeid, userId));
          precio && Promise.await(Meteor.call("addVentasOnly", userChangeid, userId, precio)); //   await VentasCollection.insert({
          //   adminId: userId,
          //   userId: userChangeid,
          //   precio: (precio.precio - user.descuentoproxy > 0) ? (precio.precio - user.descuentoproxy) : 0,
          //   comentario: precio.comentario
          // })
        }

        return precio ? precio.comentario : "No se encontro Precio a la oferta de Proxy del usuario: ".concat(userChange.username);
      } catch (error) {
        return error.message;
      }
    }),
    desabilitarProxyUser: (userChangeid, userId) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne(userChangeid));
      let user = Promise.await(Meteor.users.findOne(userId));
      let baneado = userChange.baneado;
      !baneado && Promise.await(Meteor.users.update(userChangeid, {
        $set: {
          baneado: true,
          bloqueadoDesbloqueadoPor: userId
        }
      }));
      !baneado && Promise.await(LogsCollection.insert({
        type: "Proxy",
        userAfectado: userChangeid,
        userAdmin: userId,
        message: "Ha sido Desactivado el proxy por un Admin"
      })); // Meteor.call('sendemail', userChange, {
      //   text: "Ha sido " +
      //     (!userChange.baneado ? "Desactivado" : "Activado") +
      //     ` el proxy del usuario ${userChange.username}`
      // },
      //  (!userChange.baneado ? "Desactivado " + user.username : "Activado " + user.username)),

      !baneado && Promise.await(Meteor.call('sendMensaje', userChange, {
        text: "Ha sido Desactivado el proxy"
      }, "Desactivado " + user.username));
    }),
    habilitarProxyUser: (userChangeid, userId) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne(userChangeid));
      let user = Promise.await(Meteor.users.findOne(userId));
      console.log(userChange);
      let baneado = userChange.baneado;
      baneado && Promise.await(Meteor.users.update(userChangeid, {
        $set: {
          baneado: false,
          bloqueadoDesbloqueadoPor: userId
        }
      }));
      baneado && Promise.await(LogsCollection.insert({
        type: "Proxy",
        userAfectado: userChangeid,
        userAdmin: userId,
        message: "Ha sido Activado el proxy por un Admin"
      })); // Meteor.call('sendemail', userChange, {
      //   text: "Ha sido " +
      //     (!userChange.baneado ? "Desactivado" : "Activado") +
      //     ` el proxy del usuario ${userChange.username}`
      // }, (!userChange.baneado ? "Desactivado " + user.username : "Activado " + user.username)),

      baneado && Promise.await(Meteor.call('sendMensaje', userChange, {
        text: "Ha sido " + (!userChange.baneado ? "Desactivado" : "Activado") + " el proxy"
      }, !userChange.baneado ? "Desactivado " + user.username : "Activado " + user.username));
    }),
    habilitarProxyUserinVentas: (userUsername, adminusername) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne({
        username: userUsername
      }));
      let admin = Promise.await(Meteor.users.findOne({
        username: adminusername
      }));
      let baneado = userChange.baneado;
      baneado && Promise.await(Meteor.users.update(userChange._id, {
        $set: {
          baneado: false,
          bloqueadoDesbloqueadoPor: admin._id
        }
      }));
      baneado && Promise.await(LogsCollection.insert({
        type: "Proxy",
        userAfectado: userChange._id,
        userAdmin: admin._id,
        message: "Ha sido Activado el proxy por un Admin"
      })); // Meteor.call('sendemail', userChange, {
      //   text: "Ha sido " +
      //     (!userChange.baneado ? "Desactivado" : "Activado") +
      //     ` el proxy del usuario ${userChange.username}`
      // }, (!userChange.baneado ? "Desactivado " + user.username : "Activado " + user.username)),

      baneado && Promise.await(Meteor.call('sendMensaje', userChange, {
        text: "Ha sido " + (!userChange.baneado ? "Desactivado" : "Activado") + " el proxy"
      }, !userChange.baneado ? "Desactivado " + admin.username : "Activado " + admin.username));
    }),
    desabilitarProxyUserinVentas: (userUsername, adminusername) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne({
        username: userUsername
      }));
      let admin = Promise.await(Meteor.users.findOne({
        username: adminusername
      }));
      let baneado = userChange.baneado;
      !baneado && Promise.await(Meteor.users.update(userChange._id, {
        $set: {
          baneado: true,
          bloqueadoDesbloqueadoPor: admin._id
        }
      }));
      !baneado && Promise.await(LogsCollection.insert({
        type: "Proxy",
        userAfectado: userChange._id,
        userAdmin: admin._id,
        message: "Ha sido Desactivado el proxy por un Admin"
      })); // Meteor.call('sendemail', userChange, {
      //   text: "Ha sido " +
      //     (!userChange.baneado ? "Desactivado" : "Activado") +
      //     ` el proxy del usuario ${userChange.username}`
      // }, (!userChange.baneado ? "Desactivado " + user.username : "Activado " + user.username)),

      !baneado && Promise.await(Meteor.call('sendMensaje', userChange, {
        text: "Ha sido " + (!userChange.baneado ? "Desactivado" : "Activado") + " el proxy"
      }, !userChange.baneado ? "Desactivado " + admin.username : "Activado " + admin.username));
    }),
    addVentasVPN: (userChangeid, userId) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne(userChangeid));
      let user = Promise.await(Meteor.users.findOne(userId)); // let precio = PreciosCollection.findOne(precioid)

      let precio;
      Promise.await(userChange.vpnisIlimitado) ? precio = Promise.await(PreciosCollection.findOne({
        userId: userId,
        type: "fecha-vpn"
      })) : userChange.vpnplus ? precio = Promise.await(PreciosCollection.findOne({
        userId: userId,
        type: "vpnplus",
        megas: userChange.vpnmegas
      })) : precio = Promise.await(PreciosCollection.findOne({
        userId: userId,
        type: "vpn2mb",
        megas: userChange.vpnmegas
      }));

      try {
        if (userChange.vpn) {
          Promise.await(Meteor.call("desabilitarVPNUser", userChangeid, userId));
          return null;
        } else if (precio || Array(Meteor.settings.public.administradores)[0].includes(user.username)) {
          Promise.await(Meteor.call("habilitarVPNUser", userChangeid, userId));
          precio && Promise.await(Meteor.call("addVentasOnly", userChangeid, userId, precio)); // VentasCollection.insert({
          //   adminId: userId,
          //   userId: userChangeid,
          //   precio: (precio.precio - user.descuentovpn > 0) ? (precio.precio - user.descuentovpn) : 0,
          //   comentario: precio.comentario
          // })
        }

        return precio ? precio.comentario : "No se encontro Precio a la oferta de VPN del usuario: ".concat(userChange.username);
      } catch (error) {
        return error.message;
      }
    }),
    desabilitarVPNUser: (userChangeid, userId) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne(userChangeid));
      let user = Promise.await(Meteor.users.findOne(userId));
      Promise.await(Meteor.users.update(userChangeid, {
        $set: {
          vpn: false,
          bloqueadoDesbloqueadoPor: userId
        }
      }));
      LogsCollection.insert({
        type: 'VPN',
        userAfectado: userChangeid,
        userAdmin: userId,
        message: "Se Desactiv\xF3 la VPN"
      }); // Meteor.call('sendemail', userChange, {
      //   text: "Ha sido " +
      //     (!userChange.baneado ? "Desactivado" : "Activado") +
      //     ` el proxy del usuario ${userChange.username}`
      // },
      //  (!userChange.baneado ? "Desactivado " + user.username : "Activado " + user.username)),

      Promise.await(Meteor.call('sendMensaje', userChange, {
        text: "Ha sido Desactivado el proxy"
      }, "Desactivado " + user.username));
    }),
    habilitarVPNUser: (userChangeid, userId) => Promise.asyncApply(() => {
      let userChange = Promise.await(Meteor.users.findOne(userChangeid));
      let user = Promise.await(Meteor.users.findOne(userId));

      if (userChange.vpn || userChange.vpnplus || userChange.vpn2mb) {
        let nextIp = Meteor.users.findOne({}, {
          sort: {
            vpnip: -1
          }
        }) ? Meteor.users.findOne({}, {
          sort: {
            vpnip: -1
          }
        }).vpnip : 1;
        !userChange.vpnip && Meteor.users.update(userChangeid, {
          $set: {
            vpnip: nextIp + 1
          }
        });
        Meteor.users.update(userChangeid, {
          $set: {
            vpn: true
          }
        });
        LogsCollection.insert({
          type: 'VPN',
          userAfectado: userChangeid,
          userAdmin: userId,
          message: "Se Activo la VPN"
        }); // Meteor.call('sendemail', users, { text: `Se ${!users.vpn ? "Activo" : "Desactivó"} la VPN para el usuario: ${users.username}${users.descuentovpn ? ` Con un descuento de: ${users.descuentovpn}CUP` : ""}` }, `VPN ${user.username}`)

        Meteor.call('sendMensaje', userChange, {
          text: "Se ".concat(!userChange.vpn ? "Activo" : "Desactivó", " la VPN")
        }, "VPN ".concat(user.username));
      } else {
        setMensaje("INFO!!!\nPrimeramente debe seleccionar una oferta de VPN!!!"), handleClickOpen(); // alert("INFO!!!\nPrimeramente debe seleccionar una oferta de VPN!!!")
      }
    }),
    setConsumoProxy: (user, status) => Promise.asyncApply(() => {
      try {
        let count = Promise.await(Meteor.users.update(user ? user : {}, {
          $set: {
            contandoProxy: status
          }
        }, {
          multi: true
        }));
        return "Se actualizaron ".concat(count, " usuarios");
      } catch (error) {
        return error.message;
      }
    }),
    getUrlTriller: id => {
      let peli = PelisCollection.findOne(id);
      return peli.urlTrailer ? peli.urlTrailer : null;
    }
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publicaciones.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/publicaciones.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let OnlineCollection, PelisCollection, MensajesCollection, ServersCollection, PreciosCollection, VentasCollection, FilesCollection, VersionsCollection, LogsCollection, DescargasCollection, TVCollection, RegisterDataUsersCollection;
module.link("../imports/ui/pages/collections/collections", {
  OnlineCollection(v) {
    OnlineCollection = v;
  },

  PelisCollection(v) {
    PelisCollection = v;
  },

  MensajesCollection(v) {
    MensajesCollection = v;
  },

  ServersCollection(v) {
    ServersCollection = v;
  },

  PreciosCollection(v) {
    PreciosCollection = v;
  },

  VentasCollection(v) {
    VentasCollection = v;
  },

  FilesCollection(v) {
    FilesCollection = v;
  },

  VersionsCollection(v) {
    VersionsCollection = v;
  },

  LogsCollection(v) {
    LogsCollection = v;
  },

  DescargasCollection(v) {
    DescargasCollection = v;
  },

  TVCollection(v) {
    TVCollection = v;
  },

  RegisterDataUsersCollection(v) {
    RegisterDataUsersCollection = v;
  }

}, 1);

if (Meteor.isServer) {
  console.log("Cargando Publicaciones...");
  Meteor.publish("logs", function (selector, option) {
    return LogsCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("logsId", function (id) {
    return LogsCollection.find({
      userAfectado: id
    });
  });
  Meteor.publish("registerDataUser", function (selector, option) {
    return RegisterDataUsersCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("registerDataUserId", function (id) {
    return RegisterDataUsersCollection.find({
      userId: id
    });
  });
  Meteor.publish("pelis", function (selector, option) {
    return PelisCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("peli", function (id) {
    return PelisCollection.find({
      _id: id
    });
  });
  Meteor.publish("tvs", function (selector, option) {
    return TVCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("tv", function (id) {
    return TVCollection.find({
      _id: id
    });
  });
  Meteor.publish("descargas", function (selector, option) {
    return DescargasCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("descarga", function (id) {
    return DescargasCollection.find({
      _id: id
    });
  });
  Meteor.publish("user", function (selector, option) {
    return Meteor.users.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("userID", function (id) {
    return Meteor.users.find({
      _id: id
    });
  });
  Meteor.publish("userRole", function (role) {
    return Meteor.users.find({
      "profile.role": role
    });
  });
  Meteor.publish("conexionesUser", function (id) {
    return OnlineCollection.find({
      userId: id
    });
  });
  Meteor.publish("conexiones", function (selector, option) {
    return OnlineCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("mensajes", function (selector, option) {
    return MensajesCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("server", function (id) {
    return ServersCollection.find(id);
  });
  Meteor.publish("servers", function (selector, option) {
    return ServersCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("precios", function (selector, option) {
    return PreciosCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("ventas", function (selector, option) {
    return VentasCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("files", function (selector, option) {
    return FilesCollection.find(selector ? selector : {}, option ? option : {});
  });
  Meteor.publish("versions", function (selector, option) {
    return VersionsCollection.find(selector ? selector : {}, option ? option : {});
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rutas.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/rutas.js                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let bodyParser;
module.link("body-parser", {
  default(v) {
    bodyParser = v;
  }

}, 2);
let WebApp;
module.link("meteor/webapp", {
  WebApp(v) {
    WebApp = v;
  }

}, 3);
let router;
module.link("router", {
  default(v) {
    router = v;
  }

}, 4);
let OnlineCollection, PelisCollection, MensajesCollection, ServersCollection, PreciosCollection, VentasCollection, FilesCollection, VersionsCollection, LogsCollection, DescargasCollection, TVCollection, RegisterDataUsersCollection;
module.link("../imports/ui/pages/collections/collections", {
  OnlineCollection(v) {
    OnlineCollection = v;
  },

  PelisCollection(v) {
    PelisCollection = v;
  },

  MensajesCollection(v) {
    MensajesCollection = v;
  },

  ServersCollection(v) {
    ServersCollection = v;
  },

  PreciosCollection(v) {
    PreciosCollection = v;
  },

  VentasCollection(v) {
    VentasCollection = v;
  },

  FilesCollection(v) {
    FilesCollection = v;
  },

  VersionsCollection(v) {
    VersionsCollection = v;
  },

  LogsCollection(v) {
    LogsCollection = v;
  },

  DescargasCollection(v) {
    DescargasCollection = v;
  },

  TVCollection(v) {
    TVCollection = v;
  },

  RegisterDataUsersCollection(v) {
    RegisterDataUsersCollection = v;
  }

}, 5);
const endpoint = router(); // import youtubeDownload from "./downloader";

var http = require("http");

http.post = require("http-post");

const got = require('got');

const htmlUrls = require('html-urls');

if (Meteor.isServer) {
  console.log("Cargando Rutas...");
  var conteoPost = 0;

  function streamToString(stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
      stream.on('error', err => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
  }

  function getPeli(nombre, year, url) {
    return Promise.asyncApply(() => {
      let peli = '';
      let subtitle = '';
      let poster = '';
      if (!url) throw new TypeError("Need to provide an url as first argument.");
      const {
        body: html
      } = Promise.await(got(url));
      const linksPeli = htmlUrls({
        html,
        url
      }); // for (var j = 5; j < linksPeli.length-6; j++) {
      //   // console.log(`Links de peliculas ${JSON.stringify(linksPeli[j])}`);
      // }

      var filter = require('simple-text-search');

      var get = filter(linksPeli, 'url');
      var peliurl = get('.mkv') ? get('.mkv') : get('.mp4');
      var subtitleurl = get('.srt');
      var posterurl = get('.jpg') ? get('.jpg') : get('.png');
      peli = peliurl[0] && peliurl[0].url;
      subtitle = subtitleurl[0] && subtitleurl[0].url;
      poster = posterurl[0] && posterurl[0].url;
      const insertPeli = peli && {
        nombre,
        year,
        peli,
        subtitle,
        poster
      };
      return insertPeli;
    });
  }

  ; ////////////////////////INSERTAR PELICUALAS PASANDOLE EL AÑO////////////

  endpoint.post("/insertpelisbyyears", (req, res) => {
    //console.log(req.body)
    var year = req.body.year;
    var pelis = [];

    (() => Promise.asyncApply(() => {
      const url = "https://visuales.uclv.cu/Peliculas/Extranjeras/".concat(year, "/");
      if (!url) throw new TypeError('Need to provide an url as first argument.');
      const {
        body: html
      } = Promise.await(got(url));
      const links = Promise.await(htmlUrls({
        html,
        url
      })); //   links.forEach(({ url }) => console.log(url))
      //   // => [
      //   //   'https://microlink.io/component---src-layouts-index-js-86b5f94dfa48cb04ae41.js',
      //   //   'https://microlink.io/component---src-pages-index-js-a302027ab59365471b7d.js',
      //   //   'https://microlink.io/path---index-709b6cf5b986a710cc3a.js',
      //   //   'https://microlink.io/app-8b4269e1fadd08e6ea1e.js',
      //   //   'https://microlink.io/commons-8b286eac293678e1c98c.js',
      //   //   'https://microlink.io',
      //   //   ...
      //   // ]

      for (var i = 5; i <= links.length - 4; i++) {
        let nombre = links[i].value.replace("".concat(year, "_"), "").replace("%20", " ").replace(/\./g, " ").replace("/", ""); // console.log(`Name: ${nombre}`);
        // console.log(links[i]);

        let a = Promise.await(getPeli(nombre, year, links[i].url));
        a && a.nombre && a.year && a.peli && a.poster && pelis.push(a);
        console.log("Name: ".concat(nombre));
      } // console.log(pelis);
      // console.log(pelis.length)


      try {
        pelis && pelis.forEach(element => {
          // console.log(element);
          Meteor.call("insertPelis", element); // http.post("http://localhost:6000/insertPelis", element, (opciones, res, body) => {
          //     if (!opciones.headers.error) {
          //         // console.log(`statusCode: ${res.statusCode}`);
          //         console.log(element.nombre + " => Todo OK ");
          //         return;
          //     } else {
          //         console.log(element.nombre + " => Error: " + JSON.stringify(opciones.headers));
          //         return;
          //     }
          // });
        });
      } catch (error) {
        console.log("Ocurrio un error => " + error.message);
      }
    }))(); // res.writeHead(200, {
    //   message: "todo OK",
    // });
    // res.end("todo OK")

  });
  endpoint.get("/getsubtitle", (req, res) => {
    // console.log(req)
    // console.log(req.query.idPeli)
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    //   res.end(req.query.idPeli);
    let id = req.query.idPeli;
    let pelisubtitle = PelisCollection.findOne(req.query.idPeli);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(pelisubtitle ? pelisubtitle.textSubtitle : "");
  });
  endpoint.post("/convertsrttovtt", (req, res) => Promise.asyncApply(() => {
    // console.log(req)
    // console.log(req.body)
    let id = req.body.idPeli;
    let peli = Promise.await(PelisCollection.findOne({
      _id: id
    }));

    try {
      var srt2vtt = Promise.await(require("srt-to-vtt"));
      var fs = Promise.await(require("fs"));
      var appRoot = Promise.await(require("app-root-path"));
      var subtituloFile = appRoot.path + "/public/videos/subtitulo/" + id + ".vtt";
      const https = Promise.await(require("https")); // !fs.existsSync(appRoot.path + "/public/videos/subtitulo")
      //   ? fs.mkdirSync(appRoot.path + "/public/videos/subtitulo/")
      //   : "";
      // const file = fs.createWriteStream(subtituloFile);
      // /////////////////////////////////////////////

      peli && peli.subtitulo && Promise.await(https.get(peli.subtitulo, response => Promise.asyncApply(() => {
        var stream = response.pipe(srt2vtt()); // stream.on("finish", function () {});

        streamToString(stream).then(data => {
          data && PelisCollection.update({
            _id: id
          }, {
            $set: {
              textSubtitle: data.toString("utf8")
            }
          }, {
            multi: true
          });
          console.log("Actualizado subtitulo de la Peli: ".concat(peli.nombrePeli));
        });
      })));
      res.writeHead(200, {
        message: "todo OK"
      });
      res.end();
    } catch (error) {
      console.log("--------------------------------------"); // console.log("error.error :> " + error.error);
      // console.log("error.reason :> " + error.reason);

      console.log("error.message :> " + error.message); // console.log("error.errorType :> " + error.errorType);

      console.log("--------------------------------------"); // res.writeHead(error.error, {
      //   error: error.error,
      //   reason: error.reason,
      //   message: error.message,
      //   errorType: error.errorType,
      // });

      res.writeHead(200, {
        message: "Error:\n" + error.message
      });
      res.end();
    }
  }));
  endpoint.post("/insertPelis", (req, res) => Promise.asyncApply(() => {
    // console.log(req)
    // console.log(req.body)
    //  const insertPeli = async () => {
    let exist = Promise.await(PelisCollection.findOne({
      urlPeli: req.body.peli
    }));
    let id = exist ? exist._id : Promise.await(PelisCollection.insert({
      nombrePeli: req.body.nombre,
      urlPeli: req.body.peli,
      urlBackground: req.body.poster,
      descripcion: req.body.nombre,
      tamano: 797,
      mostrar: true,
      subtitulo: req.body.subtitle,
      year: req.body.year
    }));
    let peli = Promise.await(PelisCollection.findOne({
      _id: id
    })); // console.log(peli);

    try {
      var srt2vtt = Promise.await(require("srt-to-vtt"));
      var fs = Promise.await(require("fs"));
      var appRoot = Promise.await(require("app-root-path"));
      var subtituloFile = appRoot.path + "/public/videos/subtitulo/" + id + ".vtt";
      const https = Promise.await(require("https")); // !fs.existsSync(appRoot.path + "/public/videos/subtitulo")
      //   ? fs.mkdirSync(appRoot.path + "/public/videos/subtitulo/")
      //   : "";
      // const file = fs.createWriteStream(subtituloFile);
      // /////////////////////////////////////////////

      peli && peli.subtitulo && Promise.await(https.get(peli.subtitulo, response => Promise.asyncApply(() => {
        try {
          var stream = response.pipe(srt2vtt()); // stream.on("finish", function () {});

          streamToString(stream).then(data => {
            data && PelisCollection.update({
              _id: id
            }, {
              $set: {
                textSubtitle: data.toString("utf8")
              }
            }, {
              multi: true
            });
            console.log("Actualizado subtitulo de la Peli: ".concat(peli.nombrePeli));
          });
        } catch (error) {
          console.log(error.message);
        }
      })));

      const imdbId = require('imdb-id');

      const IMDb = require('imdb-light');

      let idimdb = Promise.await(imdbId(peli.nombrePeli)); // console.log("ID de IMDB => " + idimdb)

      PelisCollection.update({
        _id: id
      }, {
        $set: {
          idimdb: idimdb
        }
      }, {
        multi: true
      });
      Promise.await(IMDb.trailer(idimdb, url => {
        // console.log(url)  // output is direct mp4 url (also have expiration timeout)
        PelisCollection.update({
          _id: id
        }, {
          $set: {
            urlTrailer: url // clasificacion: details.Genres.split(", ")

          }
        });
      }));
      Promise.await(IMDb.fetch(idimdb, details => {
        // console.log(details)  // etc...
        PelisCollection.update({
          _id: id
        }, {
          $set: {
            descripcion: details.Plot,
            clasificacion: details.Genres.split(", ")
          }
        }, {
          multi: true
        });
      }));
      res.writeHead(200, {
        message: "todo OK"
      });
    } catch (error) {
      console.log("--------------------------------------"); // console.log("error.error :> " + error.error);
      // console.log("error.reason :> " + error.reason);

      console.log("error.message :> ".concat(error.message, "\n\n            error.reason :> ").concat(error.reason)); // console.log("error.errorType :> " + error.errorType);

      console.log("--------------------------------------");
      res.writeHead(200, {
        reason: error.reason,
        message: error.message,
        errorType: error.type
      });
    }

    res.end(); // }
    // PelisCollection.find({urlPeli:req.body.peli}).count() == 0 && await insertPeli()
  }));
  endpoint.post("/getUsersVPN", (req, res) => Promise.asyncApply(() => {
    // console.log(req)
    // console.log(req.body)
    try {
      let usuarios = [];
      let result = "";
      Promise.await(Meteor.users.find({
        vpn: true
      }).forEach((user, index) => {
        usuarios.push({
          username: user.username,
          pass: user.passvpn,
          ip: "192.168.18.".concat(index)
        });
      }));
      result = usuarios.forEach(u => "".concat(result).concat(u.username, " l2tpd ").concat(u.pass, " ").concat(u.ip, "\n"));
      Promise.await(console.log("Result: " + JSON.stringify(result)));
      res.end(result);
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------");
      res.end(error);
    }
  }));
  endpoint.post("/getfile", (req, res) => Promise.asyncApply(() => {
    // console.log(req)
    // console.log(req.body)
    try {
      console.log("Get File " + JSON.stringify(req.body.nombre));
      Promise.await(fs.readFile(req.body.url, "utf-8", (err, data) => {
        if (err) res.end("Error: " + err); // console.log(data);

        res.end(data);
      }));
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------");
      res.end(error);
    }
  }));
  endpoint.post("/setfile", (req, res) => Promise.asyncApply(() => {
    // console.log(req)
    // console.log(req.body)
    try {
      console.log("Set File " + JSON.stringify(req.body));
      Promise.await(fs.writeFile(req.body.url, req.body.data, err => {
        if (err) res.end("Error: " + err);
        res.end("Datos Guardados Correctamente!!!");
      }));
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------");
      res.writeHead(error.error, {
        error: error.error,
        reason: error.reason,
        message: error.message,
        errorType: error.errorType
      });
      res.end(error);
    }
  }));
  endpoint.post("/createuser", (req, res) => {
    // console.log(req)
    // console.log(req.body)
    try {
      Accounts.createUser(req.body);
      console.log("Usuario Creado" + JSON.stringify(req.body));
      res.writeHead(200, {
        message: "Usuario Creado"
      });
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------");
      res.writeHead(error.error, {
        error: error.error,
        reason: error.reason,
        message: error.message,
        errorType: error.errorType
      });
    }

    res.end();
  });
  endpoint.post("/userpass", (req, res) => {
    // console.log(req)
    // console.log(req.body)
    try {
      req.body.username && Accounts.setUsername(req.body.id, req.body.username);
      req.body.password && (Accounts.setPassword(req.body.id, req.body.password), Meteor.users.update(req.body.id, {
        $set: {
          "passvpn": req.body.password
        }
      }));
      req.body.email && Meteor.users.update(req.body.id, {
        $set: {
          "emails": [{
            address: req.body.email
          }]
        }
      });
      req.body.movil && Meteor.users.update(req.body.id, {
        $set: {
          "movil": req.body.movil
        }
      });
      console.log("Usuario actualizado " + req.body.id);
      res.writeHead(200, {
        message: "Usuario actualizado"
      });
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------");
      res.writeHead(error.error, {
        error: error.error,
        reason: error.reason,
        message: error.message,
        errorType: error.errorType
      });
    }

    res.end();
  });
  endpoint.post("/eliminar", (req, res) => {
    // console.log(req)
    console.log(req.body);
    let id = req.body.id;

    try {
      if (DescargasCollection.findOne({
        idFile: id
      })) {
        var fs = require("fs");

        var appRoot = require("app-root-path");

        var videoFile = appRoot.path + "/public/videos/" + id + ".mp4";
        fs.existsSync(videoFile) ? fs.unlinkSync(videoFile, err => {
          err ? console.error(err) : console.log("ARCHIVO " + videoFile + " Eliminado"); //file removed
        }) : console.log("no existe el fichero");
        DescargasCollection.remove({
          idFile: id
        }); //file removed
        // res.writeHead(200, {
        //   message: "Eliminado el Archivo" + req.body.idVideo,
        // });
      }
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------"); // res.writeHead(error.error, {
      //   error: error.error,
      //   reason: error.reason,
      //   message: error.message,
      //   errorType: error.errorType,
      // });
    }

    res.end();
  }); // endpoint.post("/descarga", (req, res) => {
  //     const youtubedl = require("youtube-dl");
  //     const url = "http://www.youtube.com/watch?v=" + req.body.idVideo;
  //     // Optional arguments passed to youtube-dl.
  //     const options = ["--username=user", "--password=hunter2"];
  //     if (!DescargasCollection.findOne({ idFile: req.body.idVideo })) {
  //         try {
  //             res.writeHead(200, {
  //                 message: "Descargando:" + req.body.idVideo,
  //             });
  //             youtubeDownload(req.body.idVideo, () => {
  //                 console.log("ADD VIDEO: " + JSON.stringify(req.body.idVideo));
  //             });
  //         } catch (error) {
  //             console.log("error.error :> " + error);
  //             // console.log("error.reason :> " +error.reason)
  //             // console.log("error.message :> " +error.message)
  //             // console.log("error.errorType :> " +error.errorType)
  //             // console.log("--------------------------------------")
  //         }
  //         youtubedl.getInfo(url, options, function (err, info) {
  //             if (err) throw err;
  //             DescargasCollection.insert({
  //                 idFile: req.body.idVideo,
  //                 nombreFile: info.title,
  //                 tamanoFile: info.filesize,
  //                 comentarios: info.description,
  //                 descargadoPor: req.body.creadoPor,
  //                 thumbnail: info.thumbnail,
  //                 urlReal: "/videos/" + req.body.idVideo + ".mp4",
  //                 url: info.url,
  //             });
  //         });
  //     } else {
  //         res.writeHead(200, {
  //             message: "El fichero " + req.body.idVideo + " ya existe",
  //         });
  //     }
  //     // console.log('id:', info.id)
  //     // console.log('title:', info.title)
  //     // console.log('url:', info.url)
  //     // console.log('thumbnail:', info.thumbnail)
  //     // console.log('description:', info.description)
  //     // console.log('filename:', info._filename)
  //     // console.log('format id:', info)
  //     // console.log('filesize id:', info.filesize)
  //     res.end();
  // });

  endpoint.post("/pelis", (req, res) => {
    // console.log(req)
    // console.log(req.body)
    // console.log(PelisCollection.find({}, { descripcion: 0 }).fetch());
    try {
      let a = [];
      PelisCollection.find({}).map((peliGeneral, i) => {
        // console.log(peliGeneral);
        a.push({
          _id: peliGeneral._id,
          nombrePeli: peliGeneral.nombrePeli,
          tamano: peliGeneral.tamano,
          urlBackground: peliGeneral.urlBackground,
          urlPeli: peliGeneral.urlPeli // descripcion: descripcion,
          // vistas:vistas,
          // year:year,
          // clasificacion:clasificacion,

        });
      });
      conteoPost = conteoPost + 1;
      console.log(conteoPost + " peticion");
      res.writeHead(200, {
        json: JSON.stringify(a)
      });
    } catch (error) {
      console.log("error.error :> " + error.error);
      console.log("error.reason :> " + error.reason);
      console.log("error.message :> " + error.message);
      console.log("error.errorType :> " + error.errorType);
      console.log("--------------------------------------");
      res.writeHead(error.error, {
        error: error.error,
        reason: error.reason,
        message: error.message,
        errorType: error.errorType
      });
    }

    res.end();
  });
  endpoint.route('/ventasjson').get(function (req, res) {
    const gastos = id => {
      let totalAPagar = 0;
      VentasCollection.find({}).map(element => {
        element.adminId == id && !element.cobrado && (totalAPagar += element.precio);
      });
      return totalAPagar;
    }; // this is GET /pet/:id


    let resultado = [];
    Meteor.users.find().map(usuario => {
      let pago = gastos(usuario._id);
      pago && resultado.push({
        usuario: "".concat(usuario.profile.firstName, " ").concat(usuario.profile.lastName),
        debe: pago
      });
    });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(resultado));
  });
  endpoint.route('/usersjson').get(function (req, res) {
    // this is GET /pet/:id
    console.log(req.query);
    let q = req.query ? req.query : {};
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(Meteor.users.find(q).fetch()));
  });
  endpoint.route('/updateuser').post(function (req, res) {
    // this is DELETE /pet/:id
    // try {
    let query = req.query.id ? req.query.id : {};
    let data = req.query ? req.query : {};
    delete data[0];
    console.log(query);
    console.log(data);
    var update = Meteor.users.update(query, {
      $set: data
    }, {
      multi: true,
      upsert: true
    });
    console.log(update); // console.log(req.query);

    res.end(JSON.stringify({
      result: update
    })); // } catch (error) {
    //   res.end(JSON.stringify({
    //     error: `Error: ${error}`
    //   }))
    // }
  });
  WebApp.connectHandlers.use(bodyParser.urlencoded({
    extended: true
  }));
  WebApp.connectHandlers.use(endpoint);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverproxy3002.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/serverproxy3002.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let OnlineCollection;
module.link("../imports/ui/pages/collections/collections", {
  OnlineCollection(v) {
    OnlineCollection = v;
  }

}, 1);
let router;
module.link("router", {
  default(v) {
    router = v;
  }

}, 2);
const endpoint = router(); // -------------------Este Proxy Funciona al FULLLLLLLLL-----------

function conect(server, connectionId, userId, hostname) {
  return Promise.asyncApply(() => {
    try {
      Promise.await(OnlineCollection.insert({
        connectionId: "".concat(server).concat(connectionId.toString()),
        address: "proxy: " + Meteor.settings.public.IP,
        userId: userId,
        hostname: hostname
      }));
    } catch (error) {
      console.log(error);
    } // await Meteor.users.update(userId, {
    //   $set: {
    //     online: true,
    //   },
    // });
    // return true

  });
}

function disconect(server, connectionId, stats) {
  return Promise.asyncApply(() => {
    try {
      // await console.log('remove ' + connectionId);
      const conn = Promise.await(OnlineCollection.findOne({
        connectionId: "".concat(server).concat(connectionId.toString()) // server: process.env.ROOT_URL

      }));
      const user = conn && conn.userId && Meteor.users.findOne(conn.userId);
      let bytesGastados = Number(stats.srcTxBytes) + Number(stats.srcRxBytes); // + Number(stats.trgTxBytes) + Number(stats. trgRxBytes)

      let bytesGastadosGeneral = Number(stats.srcTxBytes) + Number(stats.srcRxBytes) + Number(stats.trgTxBytes) + Number(stats.trgRxBytes);
      user && user._id && user.contandoProxy && Promise.await(Meteor.users.update(user._id, {
        $inc: {
          megasGastadosinBytes: bytesGastados
        }
      }));
      user && user._id && user.contandoProxy && Promise.await(Meteor.users.update(user._id, {
        $inc: {
          megasGastadosinBytesGeneral: bytesGastadosGeneral
        }
      }));
      conn && conn._id && Promise.await(OnlineCollection.remove(conn._id)); // await console.log(idofconn&&idofconn._id);
      // await Meteor.users.update(userId, {
      //   $set: {
      //     online: true,
      //   },
      // });
    } catch (error) {
      console.log(error);
    }
  });
}

if (Meteor.isServer) {
  console.log("Iniciando Proxy por el puerto 3002");

  var cron = require("node-cron");

  const ProxyChain = require("proxy-chain");

  var bcrypt = require("bcrypt"); // var sha256 = require("sha256");


  const crypto = require("crypto");

  var server2 = new ProxyChain.Server({
    // Port where the server will listen. By default 8000.
    port: 3002,
    authRealm: "Service VidKar",
    // Enables verbose logging
    // verbose: true,
    // Custom user-defined function to authenticate incoming proxy requests,
    // and optionally provide the URL to chained upstream proxy.
    // The function must return an object (or promise resolving to the object) with the following signature:
    // { requestAuthentication: Boolean, upstreamProxyUrl: String }
    // If the function is not defined or is null, the server runs in simple mode.
    // Note that the function takes a single argument with the following properties:
    // * request      - An instance of http.IncomingMessage class with information about the client request
    //                  (which is either HTTP CONNECT for SSL protocol, or other HTTP request)
    // * username     - Username parsed from the Proxy-Authorization header. Might be empty string.
    // * password     - Password parsed from the Proxy-Authorization header. Might be empty string.
    // * hostname     - Hostname of the target server
    // * port         - Port of the target server
    // * isHttp       - If true, this is a HTTP request, otherwise it's a HTTP CONNECT tunnel for SSL
    //                  or other protocols
    // * connectionId - Unique ID of the HTTP connection. It can be used to obtain traffic statistics.
    prepareRequestFunction: _ref => Promise.asyncApply(() => {
      let {
        request,
        username,
        password,
        hostname,
        port,
        isHttp,
        connectionId
      } = _ref;

      try {
        const b = Promise.await(Meteor.users.findOne({
          username: username
        }));

        if (b) {
          const userInput = crypto.Hash("sha256").update(password).digest("hex");
          const a = Promise.await(bcrypt.compareSync(userInput, b && b.services.password.bcrypt));

          if (!a || b.baneado || (b.ip ? !(b.ip == Meteor.settings.public.IP) : false)) {
            return {
              requestAuthentication: true,
              failMsg: "Contraseña incorrecta, Vuelva a intentarlo nuevamente"
            };
          } else {
            try {
              connectionId && conect("3002:", connectionId, b._id, hostname); // if( await conect(connectionId,b&&b._id))

              return {};
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          return {
            requestAuthentication: true,
            failMsg: "Usuario no Existe"
          };
        }
      } catch (error) {
        // console.log(error.message);
        return {
          // If set to true, the client is sent HTTP 407 resposne with the Proxy-Authenticate header set,
          // requiring Basic authentication. Here you can verify user credentials.
          requestAuthentication: true,
          // requestAuthentication: username !== 'bob' || password !== '123',
          // Sets up an upstream HTTP proxy to which all the requests are forwarded.
          // If null, the proxy works in direct mode, i.e. the connection is forwarded directly
          // to the target server. This field is ignored if "requestAuthentication" is true.
          // The username and password should be URI-encoded, in case it contains some special characters.
          // See `parseUrl()` function for details.
          // upstreamProxyUrl: `http://username:password@proxy.example.com:3128`,
          // If "requestAuthentication" is true, you can use the following property
          // to define a custom error message to return to the client instead of the default "Proxy credentials required"
          failMsg: "Por Favor, reintentelo de nuevo, ocurrio un problema en el servidor"
        };
      }
    })
  });
  server2.listen(() => {
    console.log("Servidor Proxy iniciado por el puerto: ".concat(server2.port));
  }); // Emitted when HTTP connection is closed

  server2.on("connectionClosed", _ref2 => {
    let {
      connectionId,
      stats
    } = _ref2;
    // console.log(`Connection ${connectionId} closed`);
    // console.dir(stats);
    disconect("3002:", connectionId, stats);
  }); // Emitted when HTTP request fails

  server2.on("requestFailed", _ref3 => {
    let {
      request,
      error
    } = _ref3;
    console.log("Request ".concat(request.url, " failed"));
    console.error(error);
  });
  cron.schedule("0-59 0-23 1-31 1-12 *", () => Promise.asyncApply(() => {
    ///////////ACTUALIZAR VPN CONNECTADAS MIRANDO PARA EL CUERPO 135
    // Meteor.users.find({ vpn: true }).forEach(async (user) => {
    //   let disponible = false
    //   try {
    //     await tcpp.probe(`192.168.18.${user.vpnip}`, 135, async function (err, available) {
    //       err && console.error(err)
    //       disponible = available;
    //       Meteor.users.update(user._id, {
    //         $set: { vpnConnected: disponible }
    //       })
    //     })
    //   } catch (error) {
    //     console.error(error)
    //   }
    // })
    ///////////////////////////////////////////////////////////////
    try {
      let arrayIds = [];
      Promise.await(server2.getConnectionIds().map(id => {
        arrayIds.push("3002:" + id);
      }));
      Promise.await(OnlineCollection.find({
        address: "proxy: " + Meteor.settings.public.IP
      }).forEach(connection => {
        !arrayIds.find(id => connection.connectionId == id) && // console.log( connection.connectionId + " NO ESTA CONECTADO"),
        OnlineCollection.remove(connection._id);
      }));
    } catch (error) {
      console.error(error);
    }
  }), {
    scheduled: true,
    timezone: "America/Havana"
  }).start(); // cron
  // .schedule(
  //   "0-59 0-23 1-31 1-12 *",
  //   async () => {
  //     let arrayIds = await server3.getConnectionIds();
  //     await OnlineCollection.find({ address: "proxy" }).forEach(
  //       async (connection) => {
  //        await !arrayIds.find((id) => connection.connectionId == id) &&
  //           (await OnlineCollection.remove({
  //             connectionId: connection.connectionId,
  //           }));
  //       }
  //     );
  //   },
  //   {
  //     scheduled: true,
  //     timezone: "America/Havana",
  //   }
  // )
  // .start();

  Meteor.methods({
    closeproxy: () => {
      // console.log(req)
      // console.log(req.body)
      // console.log(PelisCollection.find({}, { descripcion: 0 }).fetch());
      try {
        server2.close(true, () => {
          console.log("Proxy server2 Port:".concat(server2.port, " was closed."));
        });
        return "Se detuvo correctamente el proxy";
      } catch (error) {
        console.log("----------------ERROR----------------------");
        console.log(error.error);
        console.log("--------------------------------------");
        return "Hubo errores al detener el proxy!"; // res.send(error.error, {
        //   error: error.error,
        //   reason: error.reason,
        //   message: error.message,
        //   errorType: error.errorType,
        // });
      }
    },
    listenproxy: () => {
      // console.log(req)
      // console.log(req.body)
      // console.log(PelisCollection.find({}, { descripcion: 0 }).fetch());
      try {
        server2 = new ProxyChain.Server({
          // Port where the server will listen. By default 8000.
          port: 3002,
          authRealm: "Service VidKar",
          // Enables verbose logging
          // verbose: true,
          // Custom user-defined function to authenticate incoming proxy requests,
          // and optionally provide the URL to chained upstream proxy.
          // The function must return an object (or promise resolving to the object) with the following signature:
          // { requestAuthentication: Boolean, upstreamProxyUrl: String }
          // If the function is not defined or is null, the server runs in simple mode.
          // Note that the function takes a single argument with the following properties:
          // * request      - An instance of http.IncomingMessage class with information about the client request
          //                  (which is either HTTP CONNECT for SSL protocol, or other HTTP request)
          // * username     - Username parsed from the Proxy-Authorization header. Might be empty string.
          // * password     - Password parsed from the Proxy-Authorization header. Might be empty string.
          // * hostname     - Hostname of the target server
          // * port         - Port of the target server
          // * isHttp       - If true, this is a HTTP request, otherwise it's a HTTP CONNECT tunnel for SSL
          //                  or other protocols
          // * connectionId - Unique ID of the HTTP connection. It can be used to obtain traffic statistics.
          prepareRequestFunction: _ref4 => Promise.asyncApply(() => {
            let {
              request,
              username,
              password,
              hostname,
              port,
              isHttp,
              connectionId
            } = _ref4;

            try {
              const b = Promise.await(Meteor.users.findOne({
                username: username
              }));

              if (b) {
                const userInput = crypto.Hash("sha256").update(password).digest("hex");
                const a = Promise.await(bcrypt.compareSync(userInput, b && b.services.password.bcrypt));

                if (!a || b.baneado || (b.ip ? !(b.ip == Meteor.settings.public.IP) : false)) {
                  return {
                    requestAuthentication: true,
                    failMsg: "Contraseña incorrecta, Vuelva a intentarlo nuevamente"
                  };
                } else {
                  try {
                    connectionId && conect("3002:", connectionId, b._id, hostname); // if( await conect(connectionId,b&&b._id))

                    return {};
                  } catch (error) {
                    console.log(error);
                  }
                }
              } else {
                return {
                  requestAuthentication: true,
                  failMsg: "Usuario no Existe"
                };
              }
            } catch (error) {
              // console.log(error.message);
              return {
                // If set to true, the client is sent HTTP 407 resposne with the Proxy-Authenticate header set,
                // requiring Basic authentication. Here you can verify user credentials.
                requestAuthentication: true,
                // requestAuthentication: username !== 'bob' || password !== '123',
                // Sets up an upstream HTTP proxy to which all the requests are forwarded.
                // If null, the proxy works in direct mode, i.e. the connection is forwarded directly
                // to the target server. This field is ignored if "requestAuthentication" is true.
                // The username and password should be URI-encoded, in case it contains some special characters.
                // See `parseUrl()` function for details.
                // upstreamProxyUrl: `http://username:password@proxy.example.com:3128`,
                // If "requestAuthentication" is true, you can use the following property
                // to define a custom error message to return to the client instead of the default "Proxy credentials required"
                failMsg: "Por Favor, reintentelo de nuevo, ocurrio un problema en el servidor"
              };
            }
          })
        });
        server2.listen(() => {
          console.log("Servidor Proxy iniciado por el puerto: ".concat(server2.port));
        }); // Emitted when HTTP connection is closed

        server2.on("connectionClosed", _ref5 => {
          let {
            connectionId,
            stats
          } = _ref5;
          // console.log(`Connection ${connectionId} closed`);
          // console.dir(stats);
          disconect("3002:", connectionId, stats);
        }); // Emitted when HTTP request fails

        server2.on("requestFailed", _ref6 => {
          let {
            request,
            error
          } = _ref6;
          console.log("Request ".concat(request.url, " failed"));
          console.error(error);
        });
        return "Se inicio correctamente el proxy";
      } catch (error) {
        console.log("----------------ERROR----------------------");
        console.log(error);
        console.log("--------------------------------------");
        return "Hubo errores al iniciar el proxy!"; // res.end(error.error, {
        //   error: error.error,
        //   reason: error.reason,
        //   message: error.message,
        //   errorType: error.errorType,
        // });
      }
    }
  }); // Meteor.call("listenproxy",(error,result)=>{
  //   console.log(result)
  // })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/startup.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let OnlineCollection, PelisCollection, MensajesCollection, ServersCollection, PreciosCollection, VentasCollection, FilesCollection, VersionsCollection, LogsCollection, DescargasCollection, TVCollection, RegisterDataUsersCollection;
module.link("../imports/ui/pages/collections/collections", {
  OnlineCollection(v) {
    OnlineCollection = v;
  },

  PelisCollection(v) {
    PelisCollection = v;
  },

  MensajesCollection(v) {
    MensajesCollection = v;
  },

  ServersCollection(v) {
    ServersCollection = v;
  },

  PreciosCollection(v) {
    PreciosCollection = v;
  },

  VentasCollection(v) {
    VentasCollection = v;
  },

  FilesCollection(v) {
    FilesCollection = v;
  },

  VersionsCollection(v) {
    VersionsCollection = v;
  },

  LogsCollection(v) {
    LogsCollection = v;
  },

  DescargasCollection(v) {
    DescargasCollection = v;
  },

  TVCollection(v) {
    TVCollection = v;
  },

  RegisterDataUsersCollection(v) {
    RegisterDataUsersCollection = v;
  }

}, 1);

if (Meteor.isServer) {
  Meteor.startup(() => {
    console.log("Iniciando Server Meteor..."); /////// mover todas las imagenes para user.picture

    Meteor.users.find({}).map(us => {
      us.services && us.services.facebook && us.services.facebook.picture.data.url && Meteor.users.update(us._id, {
        $set: {
          picture: us.services.facebook.picture.data.url
        }
      });
      us.services && us.services.google && us.services.google.picture && Meteor.users.update(us._id, {
        $set: {
          picture: us.services.google.picture
        }
      });
    });
    process.env.ROOT_URL = Meteor.settings.public.ROOT_URL; // process.env.MONGO_URL = Meteor.settings.public.MONGO_URL;

    console.log("ROOT_URL: " + process.env.ROOT_URL);
    console.log("MONGO_URL: " + process.env.MONGO_URL);
    OnlineCollection.remove({}); // OnlineCollection.remove({address: `127.0.0.1`});

    const settings = Meteor.settings;

    if (settings) {
      ServiceConfiguration.configurations.remove({
        service: 'google'
      });
      ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: settings.google.client_id,
        secret: settings.google.client_secret,
        validClientIds: settings.google.validClientIds
      });
      ServiceConfiguration.configurations.remove({
        service: "facebook"
      });
      ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: settings.facebook.appId,
        secret: settings.facebook.secret
      });
    }

    if (Meteor.users.find({
      "profile.role": "admin"
    }).count() == 0) {
      console.log("CREANDO USER ADMIN");
      const user = {
        email: "carlosmbinf@gmail.com",
        password: "lastunas123",
        firstName: "Carlos",
        lastName: "Medina",
        role: "admin",
        creadoPor: "Server",
        baneado: false,
        edad: 26,
        username: "carlosmbinf"
      };

      try {
        Accounts.createUser(user);
        console.log("ADD OK");
      } catch (error) {
        console.log("NO SE PUDO CREAR EL USER ADMIN");
      }
    }

    console.log("YA HAY UN USER ADMIN"); // const youtubedl = require('youtube-dl')
    // const url = 'http://www.youtube.com/watch?v=WKsjaOqDXgg'
    // youtubedl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function(err, output) {
    //   if (err) throw err
    //   // console.log(output.join('\n'))
    // })
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tareas.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/tareas.js                                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let LogsCollection, PelisCollection, RegisterDataUsersCollection;
module.link("../imports/ui/pages/collections/collections", {
  LogsCollection(v) {
    LogsCollection = v;
  },

  PelisCollection(v) {
    PelisCollection = v;
  },

  RegisterDataUsersCollection(v) {
    RegisterDataUsersCollection = v;
  }

}, 1);

var cron = require("node-cron");

if (Meteor.isServer) {
  console.log("Cargando Tareas...");

  try {
    cron.schedule( // "1-59 * * * *",
    "0 0 1 1-12 *", () => Promise.asyncApply(() => {
      console.log(new Date());
      let users = Promise.await(Meteor.users.find({
        $or: [{
          baneado: false
        }, {
          megasGastadosinBytes: {
            $gte: 1
          }
        }, {
          megasGastadosinBytesGeneral: {
            $gte: 1
          }
        }, {
          vpn: true
        }, {
          vpnMbGastados: {
            $gte: 1
          }
        }]
      }));
      Promise.await(console.log("Count " + users.count())); // await console.log("running every minute to 1 from 5");

      Promise.await(users.forEach(user => Promise.asyncApply(() => {
        ////////////CONSUMOS PROXY/////////////
        console.log("REVISANDO A => ".concat(user.username));
        user.megasGastadosinBytes > 0 && Promise.await(RegisterDataUsersCollection.insert({
          userId: user._id,
          type: "proxy",
          megasGastadosinBytes: user.megasGastadosinBytes,
          megasGastadosinBytesGeneral: user.megasGastadosinBytesGeneral
        }));
        user.vpnMbGastados > 0 && Promise.await(RegisterDataUsersCollection.insert({
          userId: user._id,
          type: "vpn",
          vpnMbGastados: user.vpnMbGastados
        })); ///////////////Dejar en cero el consumo de los usuarios

        Promise.await(Meteor.users.update(user._id, {
          $set: {
            megasGastadosinBytes: 0,
            megasGastadosinBytesGeneral: 0,
            vpnMbGastados: 0
          }
        })); ////////////////Banear PROXY/////////////

        !user.isIlimitado && user.baneado == false && user.profile.role !== "admin" && Promise.await((Meteor.users.update(user._id, {
          $set: {
            baneado: true
          }
        }), LogsCollection.insert({
          type: "Bloqueo Proxy",
          userAfectado: user._id,
          userAdmin: "server",
          message: "El server " + process.env.ROOT_URL + " Bloqueo automaticamente el proxy por ser dia Primero de cada Mes"
        }), Meteor.call("sendMensaje", user, {
          text: "El server Bloqueo automaticamente el proxy a: ".concat(user.profile.firstName, " ").concat(user.profile.lastName, " por ser dia Primero de cada Mes")
        }, "VidKar Bloqueo de Proxy"))); ////////////////Banear VPN/////////////

        !user.vpnisIlimitado && user.vpn == true && user.profile.role !== "admin" && Promise.await((Meteor.users.update(user._id, {
          $set: {
            vpn: false
          }
        }), LogsCollection.insert({
          type: "VPN",
          userAfectado: user._id,
          userAdmin: "server",
          message: "El server ".concat(process.env.ROOT_URL, " Desactiv\xF3 la VPN para ").concat(user.profile.firstName, " ").concat(user.profile.lastName, " dia Primero de cada Mes")
        }), Meteor.call("sendMensaje", user, {
          text: "El server Desactiv\xF3 la VPN para ".concat(user.profile.firstName, " ").concat(user.profile.lastName, " por ser dia Primero de cada Mes")
        }, "VidKar Bloqueo de VPN")));
      })));
    }), {
      scheduled: true,
      timezone: "America/Havana"
    }).start();
  } catch (error) {
    console.log(error);
  }

  try {
    //////////////////Banear proxy ///////////////////
    cron.schedule("0-59 * * * *", () => Promise.asyncApply(() => {
      let users = Promise.await(Meteor.users.find({
        baneado: false
      }, {
        fields: {
          _id: 1,
          profile: 1,
          isIlimitado: 1,
          fechaSubscripcion: 1,
          megasGastadosinBytes: 1,
          megas: 1,
          baneado: 1,
          bloqueadoDesbloqueadoPor: 1,
          emails: 1
        }
      }));
      Promise.await(users.forEach(user => {
        // !(user.username == "carlosmbinf") &&
        // user.profile.role != "admin" &&
        user.isIlimitado ? new Date() >= new Date(user.fechaSubscripcion ? user.fechaSubscripcion : new Date()) && !user.baneado && (Meteor.users.update(user._id, {
          $set: {
            baneado: true
          }
        }), LogsCollection.insert({
          type: "Bloqueo Proxy",
          userAfectado: user._id,
          userAdmin: "server",
          message: "El server " + process.env.ROOT_URL + " Bloqueo automaticamente el proxy porque llego a la fecha limite"
        }), Meteor.call("sendMensaje", user, {
          text: "El server ".concat(process.env.ROOT_URL, " Bloqueo automaticamente el proxy de ").concat(user.profile.firstName, " ").concat(user.profile.lastName, "  porque llego a la fecha limite.")
        }, 'VidKar Bloqueo de Proxy')) : (user.megasGastadosinBytes ? user.megasGastadosinBytes : 0) >= (user.megas ? Number(user.megas) : 0) * 1024000 && !user.baneado && (Meteor.users.update(user._id, {
          $set: {
            baneado: true
          }
        }), LogsCollection.insert({
          type: "Bloqueo Proxy",
          userAfectado: user._id,
          userAdmin: "server",
          message: "El server " + process.env.ROOT_URL + " Bloqueo automaticamente el proxy porque consumio: " + user.megas + " MB"
        }), Meteor.call("sendMensaje", user, {
          text: "El server  ".concat(process.env.ROOT_URL, " Bloqueo automaticamente el proxy a: ").concat(user.profile.firstName, " ").concat(user.profile.lastName, " porque consumio: ").concat(user.megas, " MB")
        }, 'VidKar Bloqueo de Proxy'));
      }));
    }), {
      scheduled: true,
      timezone: "America/Havana"
    }).start();
  } catch (error) {
    console.log(error);
  }

  try {
    //////////Banear VPN //////////////
    cron.schedule("0-59 * * * *", () => Promise.asyncApply(() => {
      let users = Promise.await(Meteor.users.find({
        vpn: true
      }, {
        fields: {
          _id: 1,
          vpnMbGastados: 1,
          profile: 1,
          vpnmegas: 1,
          vpn: 1,
          bloqueadoDesbloqueadoPor: 1,
          emails: 1,
          vpnisIlimitado: 1,
          vpnfechaSubscripcion: 1
        }
      }));
      Promise.await(users.map(user => {
        // (new Date(new Date()) > user.vpnfechaSubscripcion) &&  console.log(user)
        // console.log(new Date(new Date()));
        // console.log(user.vpnfechaSubscripcion);
        // console.log((new Date(new Date()) > user.vpnfechaSubscripcion))
        // !(user.username == "carlosmbinf") &&
        user.vpnisIlimitado && user.vpnfechaSubscripcion && new Date(new Date()) > user.vpnfechaSubscripcion && (Meteor.users.update(user._id, {
          $set: {
            vpn: false
          }
        }), LogsCollection.insert({
          type: "Bloqueo VPN",
          userAfectado: user._id,
          userAdmin: "server",
          message: "El server " + process.env.ROOT_URL + " Bloqueo automaticamente la VPN porque llego a la fecha limite"
        }));

        try {
          user.vpnisIlimitado && user.vpnfechaSubscripcion && new Date(new Date()) > user.vpnfechaSubscripcion && Meteor.call("sendMensaje", user, {
            text: "El server Bloqueo automaticamente la VPN a: ".concat(user.profile.firstName, " ").concat(user.profile.lastName, " porque paso la fecha limite: ").concat(user.vpnfechaSubscripcion)
          }, 'VidKar Bloqueo de VPN');
        } catch (error) {
          console.log("NO SE PUDO ENVIAR EL EMAIL");
        }

        !user.vpnisIlimitado && (user.vpnMbGastados ? user.vpnMbGastados : 0) >= (user.vpnmegas ? Number(user.vpnmegas) : 0) * 1024000 && (Meteor.users.update(user._id, {
          $set: {
            vpn: false
          }
        }), LogsCollection.insert({
          type: "Bloqueo VPN",
          userAfectado: user._id,
          userAdmin: "server",
          message: "El server " + process.env.ROOT_URL + " Bloqueo automaticamente la VPN porque consumio: " + user.vpnmegas + " MB"
        }), Meteor.call("sendMensaje", user, {
          text: "El server Bloqueo automaticamente la VPN a: ".concat(user.profile.firstName, " ").concat(user.profile.lastName, " porque consumio sus: ").concat(user.vpnmegas, " MB")
        }, 'VidKar Bloqueo de VPN'));
      }));
    }), {
      scheduled: true,
      timezone: "America/Havana"
    }).start();
  } catch (error) {
    console.log(error);
  }

  try {
    //////////ACTUALIZAR TRAILERS //////////////
    cron.schedule("0 * * * *", () => Promise.asyncApply(() => {
      try {
        const IMDb = Promise.await(require('imdb-light'));
        Promise.await(PelisCollection.find({}, {
          fields: {
            _id: 1,
            nombrePeli: 1,
            idimdb: 1
          }
        }).forEach(peli => Promise.asyncApply(() => {
          Promise.await(console.log("Actualizando a ".concat(peli.nombrePeli)));
          peli.idimdb && Promise.await(IMDb.trailer(peli.idimdb, url => {
            console.log(peli.nombrePeli + " => Actualizando URL Pelicula"); // output is direct mp4 url (also have expiration timeout)

            url && PelisCollection.update({
              _id: peli._id
            }, {
              $set: {
                urlTrailer: url // clasificacion: details.Genres.split(", ")

              }
            });
          }));
        })));
      } catch (error) {}
    }), {
      scheduled: true,
      timezone: "America/Havana"
    }).start();
  } catch (error) {
    console.log(error);
  }

  try {
    //////////ACTUALIZAR TRAILERS //////////////
    cron.schedule("30 0 * * *", () => Promise.asyncApply(() => {
      try {
        Promise.await(Meteor.call('closeproxy', function (error, result) {
          console.log("".concat(result, " a las ").concat(new Date()));
        }));
        Promise.await(Meteor.call('listenproxy', function (error, result) {
          console.log("".concat(result, " a las ").concat(new Date()));
        }));
      } catch (error) {
        console.log(error);
      }
    }), {
      scheduled: true,
      timezone: "America/Havana"
    }).start();
  } catch (error) {
    console.log(error);
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let OnlineCollection;
module.link("../imports/ui/pages/collections/collections", {
  OnlineCollection(v) {
    OnlineCollection = v;
  }

}, 2);
module.link("./startup");
module.link("./metodos");
module.link("./publicaciones");
module.link("./serverproxy3002");
module.link("./tareas");
module.link("./rutas");

var http = require("http");

http.post = require("http-post");

if (Meteor.isClient) {// Group.subscription = Meteor.subscribe("links");
}

var appRoot = require("app-root-path"); //   try{
//     SSLProxy({
//         port: 8080, //or 443 (normal port/requires sudo)
//         ssl : {
//           key: fs.readFileSync(appRoot.path + '/server/conf/key.pem'),
//           cert: fs.readFileSync(appRoot.path + '/server/conf/cert.pem')
//             //Optional CA
//             //Assets.getText("ca.pem")
//         }
//     });
//   }catch(error){
//     console.error(error)
//   }
// var PATH_TO_KEY =
//   appRoot.path + "/server/conf/vidkar.key";
// var PATH_TO_CERT =
//   appRoot.path + "/server/conf/vidkar.crt";
// var httpProxy = require("http-proxy");
// var options = {
//   ssl: {
//     key: fs.readFileSync(PATH_TO_KEY, "utf8"),
//     cert: fs.readFileSync(PATH_TO_CERT, "utf8"),
//   },
//   target: "http://localhost:6000",
//   ws: true,
//   xfwd: true,
// };
// var server = httpProxy.createProxyServer(options).listen(5000);
// console.log("httpProxy running with target at " + options.target);
// -------------------Este Proxy Funciona al FULLLLLLLLL-----------
// const proxy = require('@ucipass/proxy')
// const proxyPort = 3002
// proxy(proxyPort)
//   .then(() => {
//     // Use it for a while....
//   })
//   .then((server) => {
//     // console.log(server);
//     // server.stop()
//   })
// var httpProxy = require('http-proxy');
// const http = require("http");
// const basicAuth = require("basic-auth");
//   const port = 3003;
//   const target = "https://www.google.es";
//   const auth = "krly:lastunas123";
//   if (!(target && port && auth)) {
//     console.log("Usage: basic-auth-proxy-server <port> <backend> <auth>");
//     console.log(" - port       : port for proxy server e.g. 8000");
//     console.log(" - backend    : proxy target address e.g. http://localhost:3000");
//     console.log(" - auth       : {user}:{password} e.g. tom:12341234");
//     process.exit(1);
//   }
//   const proxy2 = httpProxy.createProxyServer();
//   http
//     .createServer(
//       {
//         ssl: {
//           key: fs.readFileSync(PATH_TO_KEY, "utf8"),
//           cert: fs.readFileSync(PATH_TO_CERT, "utf8"),
//         },
//       },
//       (req, res) => {
//         const [name, password] = auth.split(":");
//         const credential = basicAuth(req);
//         console.log(credential);
//         if (
//           !(
//             credential &&
//             credential.name === name &&
//             credential.pass === password
//           )
//         ) {
//           res.writeHead(401, {
//             "WWW-Authenticate": 'Basic realm="secret zone"',
//           });
//           res.end("Access denied");
//         } else {
//           //  console.log(req)
//           console.log(req.url);
//           // console.log(req.hostname)
//           var option = {
//             ssl: {
//               key: fs.readFileSync(PATH_TO_KEY, "utf8"),
//               cert: fs.readFileSync(PATH_TO_CERT, "utf8"),
//             },
//             ws: true,
//             xfwd: true,
//             // secure:true,
//             followRedirects: true,
//             hostRewrite: true,
//             autoRewrite: true,
//             changeOrigin: true,
//             ignorePath: true,
//             // selfHandleResponse:true,
//             target: req.url,
//           };
//           try {
//             proxy2.web(req, res, option);
//           } catch (error) {
//             console.log(error);
//           }
//           // console.log(req)
//         }
//       }
//     )
//     .listen(port);
// If the Links collection is empty, add some data.
// Meteor.users.allow({
//   instert() { return true; }
// });


if (Meteor.isServer) {
  Meteor.onConnection(function (connection) {
    OnlineCollection.insert({
      _id: connection.id,
      address: connection.clientAddress
    });
    connection.onClose(function () {
      OnlineCollection.remove(connection.id);
    });
  });
  Accounts.onLogin(function (info) {
    var connectionId = info.connection.id;
    var user = info.user;
    var userId = user._id;
    OnlineCollection.update(connectionId, {
      $set: {
        userId: userId,
        loginAt: new Date()
      }
    }); // Meteor.users.update(userId, {
    //   $set: {
    //     online: true,
    //   },
    // });
  });
  Accounts.onLogout(function (info) {
    var connectionId = info.connection.id;
    OnlineCollection.update(connectionId, {
      $set: {
        userId: ""
      }
    }); // Meteor.users.update(info.user._id, {
    //   $set: {
    //     online: false,
    //   },
    // });
  });
  Accounts.onCreateUser(function (options, user) {
    // console.log("options > " + JSON.stringify(options))
    // console.log("user > " + JSON.stringify(user))
    if (user.services.facebook) {
      //  user.username = user.services.facebook.name;
      // let usuario =  Meteor.users.findOne({ "services.facebook.name": user.services.facebook.name })
      let usuario = user.services.facebook.email ? Meteor.users.findOne({
        "emails.address": user.services.facebook.email
      }) : Meteor.users.findOne({
        "services.facebook.first_name": user.services.facebook.first_name,
        "services.facebook.last_name": user.services.facebook.last_name
      });
      usuario ? (console.log("Usuario de FACEBOOK ".concat(usuario._id, " actualizado")), usuario.services.facebook = user.services.facebook, user = usuario, user.profile = {
        firstName: user.services.facebook.first_name,
        lastName: user.services.facebook.last_name,
        name: user.services.facebook.name,
        role: user.profile.role
      }, user.picture = user.services.facebook.picture.data.url, Meteor.users.remove(usuario._id)) : (console.log("Usuario de FACEBOOK ".concat(user._id, " Creado")), user.emails = [{
        address: user.services.facebook.email
      }], user.profile = {
        firstName: user.services.facebook.first_name,
        lastName: user.services.facebook.last_name,
        name: user.services.facebook.name,
        role: "user"
      }, user.online = false, user.creadoPor = "Facebook", user.baneado = true, user.picture = user.services.facebook.picture.data.url, user.descuentoproxy = 0, user.descuentovpn = 0, user.contandoProxy = true, user.contandoVPN = true);
      return user;
    } else if (user.services.google) {
      //  user.username = user.services.facebook.name;
      let usuario = user.services.google.email && Meteor.users.findOne({
        "emails.address": user.services.google.email
      });
      usuario ? (console.log("Usuario de GOOGLE ".concat(usuario._id, " actualizado")), usuario.services.google = user.services.google, user = usuario, user.profile = {
        firstName: user.services.google.given_name,
        lastName: user.services.google.family_name,
        name: user.services.google.name,
        role: user.profile.role
      }, user.picture = user.services.google.picture, Meteor.users.remove(usuario._id)) : (console.log("Usuario de GOOGLE ".concat(user._id, " Creado")), user.emails = [{
        address: user.services.google.email
      }], user.profile = {
        firstName: user.services.google.given_name,
        lastName: user.services.google.family_name,
        name: user.services.google.name,
        role: "user"
      }, user.online = false, user.creadoPor = "Google", user.baneado = true, user.picture = user.services.google.picture, user.descuentoproxy = 0, user.descuentovpn = 0, user.contandoProxy = true, user.contandoVPN = true);
      return user;
    } else {
      const profile = {
        firstName: options.firstName,
        lastName: options.lastName,
        role: options.role
      }; // user.username = options.firstName + options.lastName

      user.profile = profile;
      user.creadoPor = options.creadoPor;
      user.bloqueadoDesbloqueadoPor = options.creadoPor;
      user.edad = options.edad;
      user.online = false;
      user.baneado = true;
      user.descuentoproxy = 0;
      user.descuentovpn = 0;
      user.contandoProxy = true;
      user.contandoVPN = true;
      console.log("user: \n".concat(JSON.stringify(user), "\n-----------------------\n"));
      console.log("options: \n".concat(JSON.stringify(options), "\n-----------------------\n"));
      return user;
    }
  });
  Meteor.users.after.insert(function (userId, doc) {
    // console.log(userId);
    console.log("Usuario Creado con id => ".concat(doc._id));
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".ts",
    ".tsx",
    ".mjs",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy91aS9wYWdlcy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL0VqZWN1dGFyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0b2Rvcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2FjaW9uZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9ydXRhcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3NlcnZlcnByb3h5MzAwMi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3N0YXJ0dXAuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci90YXJlYXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIlBlbGlzQ29sbGVjdGlvbiIsIkRlc2Nhcmdhc0NvbGxlY3Rpb24iLCJUVkNvbGxlY3Rpb24iLCJPbmxpbmVDb2xsZWN0aW9uIiwiTWVuc2FqZXNDb2xsZWN0aW9uIiwiUmVnaXN0ZXJEYXRhVXNlcnNDb2xsZWN0aW9uIiwiTG9nc0NvbGxlY3Rpb24iLCJTZXJ2ZXJzQ29sbGVjdGlvbiIsIlByZWNpb3NDb2xsZWN0aW9uIiwiVmVudGFzQ29sbGVjdGlvbiIsIkZpbGVzQ29sbGVjdGlvbiIsIlZlcnNpb25zQ29sbGVjdGlvbiIsIlNjaGVtYVJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbiIsIlNjaGVtYVZlbnRhc0NvbGxlY3Rpb24iLCJTY2hlbWFQcmVjaW9zQ29sbGVjdGlvbiIsIlNjaGVtYUxvZ3NDb2xsZWN0aW9uIiwiU2NoZW1hT25saW5lQ29sbGVjdGlvbiIsIlNjaGVtYU1lbnNhamVzQ29sbGVjdGlvbiIsIlNjaGVtYVRWQ29sbGVjdGlvbiIsIlNjaGVtYVBlbGlzQ29sbGVjdGlvbiIsIlNjaGVtYURlc2NhcmdhQ29sbGVjdGlvbiIsIlNjaGVtYVNlcnZlcnNDb2xsZWN0aW9uIiwiU2NoZW1hRmlsZXNDb2xsZWN0aW9uIiwiTW9uZ28iLCJsaW5rIiwidiIsIlNpbXBsZVNjaGVtYSIsImRlZmF1bHQiLCJNZXRlb3IiLCJleHRlbmRPcHRpb25zIiwiQ29sbGVjdGlvbiIsIm1ldGhvZHMiLCJleHBvcnREYXRhVG8iLCJ1cmxNb25nb0RCIiwibWkiLCJyZXF1aXJlIiwiZmllbGRzIiwiZmluZCIsImZldGNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiaG9zdCIsImNhbGxiYWNrIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwidXNlcnMiLCJ1c2VySWQiLCJ0eXBlIiwiU3RyaW5nIiwib3B0aW9uYWwiLCJmZWNoYSIsIkRhdGUiLCJhdXRvVmFsdWUiLCJpc0luc2VydCIsImlzVXBzZXJ0IiwiJHNldE9uSW5zZXJ0IiwidW5zZXQiLCJ2cG5NYkdhc3RhZG9zIiwiTnVtYmVyIiwiZGVmYXVsdFZhbHVlIiwibWVnYXNHYXN0YWRvc2luQnl0ZXMiLCJtZWdhc0dhc3RhZG9zaW5CeXRlc0dlbmVyYWwiLCJhdHRhY2hTY2hlbWEiLCJhZG1pbklkIiwiY3JlYXRlZEF0IiwiY29icmFkbyIsIkJvb2xlYW4iLCJjb2JyYWRvQWxBZG1pbiIsInByZWNpbyIsImNvbWVudGFyaW8iLCJnYW5hbmNpYXNBZG1pbiIsIm1lZ2FzIiwiaGVyZWRhRGUiLCJkZXRhbGxlcyIsInVzZXJBZG1pbiIsInVzZXJBZmVjdGFkbyIsIm1lc3NhZ2UiLCJhZGRyZXNzIiwiY29ubmVjdGlvbklkIiwibG9naW5BdCIsImhvc3RuYW1lIiwiZnJvbSIsInRvIiwibWVuc2FqZSIsImxlaWRvIiwibm9tYnJlVFYiLCJ1cmxUViIsInVybEJhY2tncm91bmQiLCJkZXNjcmlwY2lvbiIsIm1vc3RyYXIiLCJ2aXN0YXMiLCJub21icmVQZWxpIiwidXJsUGVsaSIsInVybFRyYWlsZXIiLCJ0YW1hbm8iLCJzdWJ0aXR1bG8iLCJ5ZWFyIiwidGV4dFN1YnRpdGxlIiwiY2xhc2lmaWNhY2lvbiIsIkFycmF5IiwiaWRpbWRiIiwiaWRGaWxlIiwibm9tYnJlRmlsZSIsInRhbWFub0ZpbGUiLCJjb21lbnRhcmlvcyIsImRlc2NhcmdhZG9Qb3IiLCJ0aHVtYm5haWwiLCJ1cmxSZWFsIiwidXJsIiwiZG9tYWluIiwiaXAiLCJhY3RpdmUiLCJkZXRhaWxzIiwibm9tYnJlIiwiYWxsb3ciLCJpbnNlcnQiLCJkb2MiLCJ1cGRhdGUiLCJyZW1vdmUiLCJmaW5kT25lIiwiX2lkIiwicHJvZmlsZSIsInJvbGUiLCJtb2RpZmllciIsIlByb21pc2UiLCJleGVjIiwiZXhlY3V0ZSIsImNvbW1hbmQiLCJjbWQiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3Rkb3V0Iiwic3RkZXJyIiwiZXhwb3J0cyIsIkFjY291bnRzIiwiaXNTZXJ2ZXIiLCJzdHJlYW1Ub1N0cmluZyIsInN0cmVhbSIsImNodW5rcyIsIm9uIiwiY2h1bmsiLCJwdXNoIiwiQnVmZmVyIiwiY29uY2F0IiwidG9TdHJpbmciLCJyZXN1bHQiLCJnZXR1c2VycyIsImZpbHRlciIsInNvcnQiLCJ2cG5pcCIsInNldE9ubGluZVZQTiIsImlkIiwiZGF0YWNoYW5nZSIsIiRzZXQiLCJhZGRVc2VyIiwidXNlciIsImNyZWF0ZVVzZXIiLCJzZW5kZW1haWwiLCJ0ZXh0Iiwic3ViamVjdCIsImFkbWluIiwiYmxvcXVlYWRvRGVzYmxvcXVlYWRvUG9yIiwiZW1haWxzIiwicGFzcyIsImZ1bGxSZXN1bHQiLCJzZW5kTWVuc2FqZSIsInVzZXJuYW1lIiwic2V0dGluZ3MiLCJwdWJsaWMiLCJhZG1pbmlzdHJhZG9yZXMiLCJpbnNlcnRQZWxpcyIsInBlbGljdWxhIiwiZXhpc3QiLCJwZWxpIiwicG9zdGVyIiwic3VidGl0bGUiLCJzcnQydnR0IiwiZnMiLCJhcHBSb290Iiwic3VidGl0dWxvRmlsZSIsInBhdGgiLCJodHRwcyIsImdldCIsInJlc3BvbnNlIiwicGlwZSIsInRoZW4iLCJkYXRhIiwibXVsdGkiLCJpbWRiSWQiLCJJTURiIiwidHJhaWxlciIsIlBsb3QiLCJHZW5yZXMiLCJzcGxpdCIsInJlYXNvbiIsImVycm9yVHlwZSIsImdldExpc3RhZG9zUHJlY2lvc09maWNpYWxlcyIsImdldEFkbWluUHJpbmNpcGFsIiwiYWRtaW5QcmluY2lwYWwiLCJnZXRQcmVjaW9PZmljaWFsIiwiY29tcHJhIiwicHJlY2lvT2ZpY2lhbCIsImFkZFZlbnRhc09ubHkiLCJ1c2VyQ2hhbmdlaWQiLCJ1c2VyQ2hhbmdlIiwiY2FsbCIsImFkZFZlbnRhc1Byb3h5IiwiaXNJbGltaXRhZG8iLCJiYW5lYWRvIiwiaW5jbHVkZXMiLCJkZXNhYmlsaXRhclByb3h5VXNlciIsImhhYmlsaXRhclByb3h5VXNlciIsImhhYmlsaXRhclByb3h5VXNlcmluVmVudGFzIiwidXNlclVzZXJuYW1lIiwiYWRtaW51c2VybmFtZSIsImRlc2FiaWxpdGFyUHJveHlVc2VyaW5WZW50YXMiLCJhZGRWZW50YXNWUE4iLCJ2cG5pc0lsaW1pdGFkbyIsInZwbnBsdXMiLCJ2cG5tZWdhcyIsInZwbiIsImRlc2FiaWxpdGFyVlBOVXNlciIsImhhYmlsaXRhclZQTlVzZXIiLCJ2cG4ybWIiLCJuZXh0SXAiLCJzZXRNZW5zYWplIiwiaGFuZGxlQ2xpY2tPcGVuIiwic2V0Q29uc3Vtb1Byb3h5Iiwic3RhdHVzIiwiY291bnQiLCJjb250YW5kb1Byb3h5IiwiZ2V0VXJsVHJpbGxlciIsInB1Ymxpc2giLCJzZWxlY3RvciIsIm9wdGlvbiIsImJvZHlQYXJzZXIiLCJXZWJBcHAiLCJyb3V0ZXIiLCJlbmRwb2ludCIsImh0dHAiLCJwb3N0IiwiZ290IiwiaHRtbFVybHMiLCJjb250ZW9Qb3N0IiwiZ2V0UGVsaSIsIlR5cGVFcnJvciIsImJvZHkiLCJodG1sIiwibGlua3NQZWxpIiwicGVsaXVybCIsInN1YnRpdGxldXJsIiwicG9zdGVydXJsIiwiaW5zZXJ0UGVsaSIsInJlcSIsInJlcyIsInBlbGlzIiwibGlua3MiLCJpIiwibGVuZ3RoIiwidmFsdWUiLCJyZXBsYWNlIiwiYSIsImZvckVhY2giLCJlbGVtZW50IiwicXVlcnkiLCJpZFBlbGkiLCJwZWxpc3VidGl0bGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJ3cml0ZUhlYWQiLCJ1c3VhcmlvcyIsImluZGV4IiwicGFzc3ZwbiIsInUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbCIsIm1vdmlsIiwidmlkZW9GaWxlIiwiZXhpc3RzU3luYyIsInVubGlua1N5bmMiLCJtYXAiLCJwZWxpR2VuZXJhbCIsImpzb24iLCJyb3V0ZSIsImdhc3RvcyIsInRvdGFsQVBhZ2FyIiwicmVzdWx0YWRvIiwidXN1YXJpbyIsInBhZ28iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRlYmUiLCJxIiwidXBzZXJ0IiwiY29ubmVjdEhhbmRsZXJzIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiY29uZWN0Iiwic2VydmVyIiwiSVAiLCJkaXNjb25lY3QiLCJzdGF0cyIsImNvbm4iLCJieXRlc0dhc3RhZG9zIiwic3JjVHhCeXRlcyIsInNyY1J4Qnl0ZXMiLCJieXRlc0dhc3RhZG9zR2VuZXJhbCIsInRyZ1R4Qnl0ZXMiLCJ0cmdSeEJ5dGVzIiwiJGluYyIsImNyb24iLCJQcm94eUNoYWluIiwiYmNyeXB0IiwiY3J5cHRvIiwic2VydmVyMiIsIlNlcnZlciIsInBvcnQiLCJhdXRoUmVhbG0iLCJwcmVwYXJlUmVxdWVzdEZ1bmN0aW9uIiwicmVxdWVzdCIsImlzSHR0cCIsImIiLCJ1c2VySW5wdXQiLCJIYXNoIiwiZGlnZXN0IiwiY29tcGFyZVN5bmMiLCJzZXJ2aWNlcyIsInJlcXVlc3RBdXRoZW50aWNhdGlvbiIsImZhaWxNc2ciLCJsaXN0ZW4iLCJzY2hlZHVsZSIsImFycmF5SWRzIiwiZ2V0Q29ubmVjdGlvbklkcyIsImNvbm5lY3Rpb24iLCJzY2hlZHVsZWQiLCJ0aW1lem9uZSIsInN0YXJ0IiwiY2xvc2Vwcm94eSIsImNsb3NlIiwibGlzdGVucHJveHkiLCJzdGFydHVwIiwidXMiLCJmYWNlYm9vayIsInBpY3R1cmUiLCJnb29nbGUiLCJwcm9jZXNzIiwiZW52IiwiUk9PVF9VUkwiLCJNT05HT19VUkwiLCJTZXJ2aWNlQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb25zIiwic2VydmljZSIsImNsaWVudElkIiwiY2xpZW50X2lkIiwic2VjcmV0IiwiY2xpZW50X3NlY3JldCIsInZhbGlkQ2xpZW50SWRzIiwiYXBwSWQiLCJjcmVhZG9Qb3IiLCJlZGFkIiwiJG9yIiwiJGd0ZSIsImZlY2hhU3Vic2NyaXBjaW9uIiwidnBuZmVjaGFTdWJzY3JpcGNpb24iLCJpc0NsaWVudCIsIm9uQ29ubmVjdGlvbiIsImNsaWVudEFkZHJlc3MiLCJvbkNsb3NlIiwib25Mb2dpbiIsImluZm8iLCJvbkxvZ291dCIsIm9uQ3JlYXRlVXNlciIsIm9wdGlvbnMiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwibmFtZSIsIm9ubGluZSIsImRlc2N1ZW50b3Byb3h5IiwiZGVzY3VlbnRvdnBuIiwiY29udGFuZG9WUE4iLCJnaXZlbl9uYW1lIiwiZmFtaWx5X25hbWUiLCJhZnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsaUJBQWUsRUFBQyxNQUFJQSxlQUFyQjtBQUFxQ0MscUJBQW1CLEVBQUMsTUFBSUEsbUJBQTdEO0FBQWlGQyxjQUFZLEVBQUMsTUFBSUEsWUFBbEc7QUFBK0dDLGtCQUFnQixFQUFDLE1BQUlBLGdCQUFwSTtBQUFxSkMsb0JBQWtCLEVBQUMsTUFBSUEsa0JBQTVLO0FBQStMQyw2QkFBMkIsRUFBQyxNQUFJQSwyQkFBL047QUFBMlBDLGdCQUFjLEVBQUMsTUFBSUEsY0FBOVE7QUFBNlJDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUFuVDtBQUFxVUMsbUJBQWlCLEVBQUMsTUFBSUEsaUJBQTNWO0FBQTZXQyxrQkFBZ0IsRUFBQyxNQUFJQSxnQkFBbFk7QUFBbVpDLGlCQUFlLEVBQUMsTUFBSUEsZUFBdmE7QUFBdWJDLG9CQUFr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QTNFLFVBQUksQ0FBQ3VPLFdBQUwsR0FBbUIsSUFBbkI7QUFDQXhWLGFBQU8sQ0FBQ0UsR0FBUixtQkFBdUJzTyxJQUFJLENBQUNDLFNBQUwsQ0FBZXhILElBQWYsQ0FBdkI7QUFDQWpILGFBQU8sQ0FBQ0UsR0FBUixzQkFBMEJzTyxJQUFJLENBQUNDLFNBQUwsQ0FBZXdHLE9BQWYsQ0FBMUI7QUFFQSxhQUFPaE8sSUFBUDtBQUNEO0FBRUYsR0F0R0Q7QUF3R0FqSSxRQUFNLENBQUNtQixLQUFQLENBQWF3VixLQUFiLENBQW1CbFIsTUFBbkIsQ0FBMEIsVUFBVXJFLE1BQVYsRUFBa0JzRSxHQUFsQixFQUF1QjtBQUMvQztBQUNBMUUsV0FBTyxDQUFDRSxHQUFSLG9DQUF3Q3dFLEdBQUcsQ0FBQ0ksR0FBNUM7QUFDRCxHQUhEO0FBSUQsQyIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xyXG5pbXBvcnQgU2ltcGxlU2NoZW1hIGZyb20gJ3NpbXBsLXNjaGVtYSc7XHJcbmltcG9ydCB7IE1ldGVvciB9IGZyb20gXCJtZXRlb3IvbWV0ZW9yXCI7XHJcblxyXG5cclxuU2ltcGxlU2NoZW1hLmV4dGVuZE9wdGlvbnMoWydhdXRvZm9ybSddKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQZWxpc0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncGVsaXNSZWdpc3RlcicpO1xyXG5leHBvcnQgY29uc3QgRGVzY2FyZ2FzQ29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdkZXNjYXJnYXNSZWdpc3RlcicpO1xyXG5leHBvcnQgY29uc3QgVFZDb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3R2UmVnaXN0ZXInKTtcclxuZXhwb3J0IGNvbnN0IE9ubGluZUNvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignb25saW5lJyk7XHJcbmV4cG9ydCBjb25zdCBNZW5zYWplc0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbWVuc2FqZXMnKTtcclxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdyZWdpc3RlckRhdGFVc2VycycpO1xyXG5leHBvcnQgY29uc3QgTG9nc0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignTG9ncycpO1xyXG5leHBvcnQgY29uc3QgU2VydmVyc0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignc2VydmVycycpO1xyXG5leHBvcnQgY29uc3QgUHJlY2lvc0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncHJlY2lvcycpO1xyXG5leHBvcnQgY29uc3QgVmVudGFzQ29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd2ZW50YXMnKTtcclxuZXhwb3J0IGNvbnN0IEZpbGVzQ29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdmaWxlcycpO1xyXG5leHBvcnQgY29uc3QgVmVyc2lvbnNDb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3ZlcnNpb25zJyk7XHJcblxyXG5cclxuXHJcbk1ldGVvci5tZXRob2RzKHtcclxuIGFzeW5jIGV4cG9ydERhdGFUbyh1cmxNb25nb0RCKSB7XHJcbiAgdmFyIG1pID0gcmVxdWlyZShcIm1vbmdvaW1wb3J0XCIpO1xyXG4gICB0cnkge1xyXG4gICAgYXdhaXQgbWkoe1xyXG4gICAgICAgZmllbGRzOiBQZWxpc0NvbGxlY3Rpb24uZmluZCgpLmZldGNoKCksIC8vIHthcnJheX0gZGF0YSB0byBpbXBvcnRcclxuICAgICAgIGRiOiBcIm1ldGVvclwiLCAvLyB7c3RyaW5nfSBuYW1lIG9mIGRiXHJcbiAgICAgICBjb2xsZWN0aW9uOiAncGVsaXNSZWdpc3RlcicsIC8vIHtzdHJpbmd8ZnVuY3Rpb259IG5hbWUgb2YgY29sbGVjdGlvbiwgb3IgdXNlIGEgZnVuY3Rpb24gdG9cclxuICAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgIGhvc3Q6IHVybE1vbmdvREIsXHJcbiAgICAgICBjYWxsYmFjazogKGVyciwgZGIpID0+IHtcclxuICAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgIH0sXHJcbiAgICAgfSk7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICB9XHJcbiAgXHJcbiAgIHRyeSB7XHJcbiAgICBhd2FpdCBtaSh7XHJcbiAgICAgIGZpZWxkczogRGVzY2FyZ2FzQ29sbGVjdGlvbi5maW5kKCkuZmV0Y2goKSwgLy8ge2FycmF5fSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICBkYjogXCJtZXRlb3JcIiwgLy8ge3N0cmluZ30gbmFtZSBvZiBkYlxyXG4gICAgICBjb2xsZWN0aW9uOiAnZGVzY2FyZ2FzUmVnaXN0ZXInLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtaSh7XHJcbiAgICAgIGZpZWxkczogVFZDb2xsZWN0aW9uLmZpbmQoKS5mZXRjaCgpLCAvLyB7YXJyYXl9IGRhdGEgdG8gaW1wb3J0XHJcbiAgICAgIGRiOiBcIm1ldGVvclwiLCAvLyB7c3RyaW5nfSBuYW1lIG9mIGRiXHJcbiAgICAgIGNvbGxlY3Rpb246ICd0dlJlZ2lzdGVyJywgLy8ge3N0cmluZ3xmdW5jdGlvbn0gbmFtZSBvZiBjb2xsZWN0aW9uLCBvciB1c2UgYSBmdW5jdGlvbiB0b1xyXG4gICAgICAvLyAgcmV0dXJuIGEgbmFtZSwgYWNjZXB0IG9uZSBwYXJhbSAtIFtmaWVsZHNdIHRoZSBmaWVsZHMgdG8gaW1wb3J0XHJcbiAgICAgIGhvc3Q6IHVybE1vbmdvREIsXHJcbiAgICAgIGNhbGxiYWNrOiAoZXJyLCBkYikgPT4ge1xyXG4gICAgICAgIGVyciAmJiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyB0cnkge1xyXG4gIC8vICAgYXdhaXQgbWkoe1xyXG4gIC8vICAgICBmaWVsZHM6IE9ubGluZUNvbGxlY3Rpb24uZmluZCgpLmZldGNoKCksIC8vIHthcnJheX0gZGF0YSB0byBpbXBvcnRcclxuICAvLyAgICAgZGI6IFwibWV0ZW9yXCIsIC8vIHtzdHJpbmd9IG5hbWUgb2YgZGJcclxuICAvLyAgICAgY29sbGVjdGlvbjogJ29ubGluZScsIC8vIHtzdHJpbmd8ZnVuY3Rpb259IG5hbWUgb2YgY29sbGVjdGlvbiwgb3IgdXNlIGEgZnVuY3Rpb24gdG9cclxuICAvLyAgICAgLy8gIHJldHVybiBhIG5hbWUsIGFjY2VwdCBvbmUgcGFyYW0gLSBbZmllbGRzXSB0aGUgZmllbGRzIHRvIGltcG9ydFxyXG4gIC8vICAgICBob3N0OiB1cmxNb25nb0RCLFxyXG4gIC8vICAgICBjYWxsYmFjazogKGVyciwgZGIpID0+IHtcclxuICAvLyAgICAgICBlcnIgJiYgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIFxyXG4gIC8vIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1pKHtcclxuICAgICAgZmllbGRzOiBNZW5zYWplc0NvbGxlY3Rpb24uZmluZCgpLmZldGNoKCksIC8vIHthcnJheX0gZGF0YSB0byBpbXBvcnRcclxuICAgICAgZGI6IFwibWV0ZW9yXCIsIC8vIHtzdHJpbmd9IG5hbWUgb2YgZGJcclxuICAgICAgY29sbGVjdGlvbjogJ21lbnNhamVzJywgLy8ge3N0cmluZ3xmdW5jdGlvbn0gbmFtZSBvZiBjb2xsZWN0aW9uLCBvciB1c2UgYSBmdW5jdGlvbiB0b1xyXG4gICAgICAvLyAgcmV0dXJuIGEgbmFtZSwgYWNjZXB0IG9uZSBwYXJhbSAtIFtmaWVsZHNdIHRoZSBmaWVsZHMgdG8gaW1wb3J0XHJcbiAgICAgIGhvc3Q6IHVybE1vbmdvREIsXHJcbiAgICAgIGNhbGxiYWNrOiAoZXJyLCBkYikgPT4ge1xyXG4gICAgICAgIGVyciAmJiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgbWkoe1xyXG4gICAgICBmaWVsZHM6IFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbi5maW5kKCkuZmV0Y2goKSwgLy8ge2FycmF5fSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICBkYjogXCJtZXRlb3JcIiwgLy8ge3N0cmluZ30gbmFtZSBvZiBkYlxyXG4gICAgICBjb2xsZWN0aW9uOiAncmVnaXN0ZXJEYXRhVXNlcnMnLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtaSh7XHJcbiAgICAgIGZpZWxkczogTG9nc0NvbGxlY3Rpb24uZmluZCgpLmZldGNoKCksIC8vIHthcnJheX0gZGF0YSB0byBpbXBvcnRcclxuICAgICAgZGI6IFwibWV0ZW9yXCIsIC8vIHtzdHJpbmd9IG5hbWUgb2YgZGJcclxuICAgICAgY29sbGVjdGlvbjogJ0xvZ3MnLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtaSh7XHJcbiAgICAgIGZpZWxkczogU2VydmVyc0NvbGxlY3Rpb24uZmluZCgpLmZldGNoKCksIC8vIHthcnJheX0gZGF0YSB0byBpbXBvcnRcclxuICAgICAgZGI6IFwibWV0ZW9yXCIsIC8vIHtzdHJpbmd9IG5hbWUgb2YgZGJcclxuICAgICAgY29sbGVjdGlvbjogJ3NlcnZlcnMnLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtaSh7XHJcbiAgICAgIGZpZWxkczogUHJlY2lvc0NvbGxlY3Rpb24uZmluZCgpLmZldGNoKCksIC8vIHthcnJheX0gZGF0YSB0byBpbXBvcnRcclxuICAgICAgZGI6IFwibWV0ZW9yXCIsIC8vIHtzdHJpbmd9IG5hbWUgb2YgZGJcclxuICAgICAgY29sbGVjdGlvbjogJ3ByZWNpb3MnLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtaSh7XHJcbiAgICAgIGZpZWxkczogVmVudGFzQ29sbGVjdGlvbi5maW5kKCkuZmV0Y2goKSwgLy8ge2FycmF5fSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICBkYjogXCJtZXRlb3JcIiwgLy8ge3N0cmluZ30gbmFtZSBvZiBkYlxyXG4gICAgICBjb2xsZWN0aW9uOiAndmVudGFzJywgLy8ge3N0cmluZ3xmdW5jdGlvbn0gbmFtZSBvZiBjb2xsZWN0aW9uLCBvciB1c2UgYSBmdW5jdGlvbiB0b1xyXG4gICAgICAvLyAgcmV0dXJuIGEgbmFtZSwgYWNjZXB0IG9uZSBwYXJhbSAtIFtmaWVsZHNdIHRoZSBmaWVsZHMgdG8gaW1wb3J0XHJcbiAgICAgIGhvc3Q6IHVybE1vbmdvREIsXHJcbiAgICAgIGNhbGxiYWNrOiAoZXJyLCBkYikgPT4ge1xyXG4gICAgICAgIGVyciAmJiBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgbWkoe1xyXG4gICAgICBmaWVsZHM6IE1ldGVvci51c2Vycy5maW5kKCkuZmV0Y2goKSwgLy8ge2FycmF5fSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICBkYjogXCJtZXRlb3JcIiwgLy8ge3N0cmluZ30gbmFtZSBvZiBkYlxyXG4gICAgICBjb2xsZWN0aW9uOiAndXNlcnMnLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcbiAgICBcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbWkoe1xyXG4gICAgICBmaWVsZHM6IEZpbGVzQ29sbGVjdGlvbi5maW5kKCkuZmV0Y2goKSwgLy8ge2FycmF5fSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICBkYjogXCJtZXRlb3JcIiwgLy8ge3N0cmluZ30gbmFtZSBvZiBkYlxyXG4gICAgICBjb2xsZWN0aW9uOiAnZmlsZXMnLCAvLyB7c3RyaW5nfGZ1bmN0aW9ufSBuYW1lIG9mIGNvbGxlY3Rpb24sIG9yIHVzZSBhIGZ1bmN0aW9uIHRvXHJcbiAgICAgIC8vICByZXR1cm4gYSBuYW1lLCBhY2NlcHQgb25lIHBhcmFtIC0gW2ZpZWxkc10gdGhlIGZpZWxkcyB0byBpbXBvcnRcclxuICAgICAgaG9zdDogdXJsTW9uZ29EQixcclxuICAgICAgY2FsbGJhY2s6IChlcnIsIGRiKSA9PiB7XHJcbiAgICAgICAgZXJyICYmIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgU2NoZW1hUmVnaXN0ZXJEYXRhVXNlcnNDb2xsZWN0aW9uID0gbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgdXNlcklkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgfSxcclxuICBmZWNoYToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGF1dG9WYWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5zZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Vwc2VydCkge1xyXG4gICAgICAgIHJldHVybiB7JHNldE9uSW5zZXJ0OiBuZXcgRGF0ZSgpfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVuc2V0KCk7ICAvLyBQcmV2ZW50IHVzZXIgZnJvbSBzdXBwbHlpbmcgdGhlaXIgb3duIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIHZwbk1iR2FzdGFkb3M6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHRWYWx1ZTogMCxcclxuICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gIH0sXHJcbiAgbWVnYXNHYXN0YWRvc2luQnl0ZXM6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHRWYWx1ZTogMCxcclxuICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gIH0sXHJcbiAgbWVnYXNHYXN0YWRvc2luQnl0ZXNHZW5lcmFsOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0VmFsdWU6IDAsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIHR5cGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJwcm94eVwiLFxyXG4gICAgb3B0aW9uYWw6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuUmVnaXN0ZXJEYXRhVXNlcnNDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFSZWdpc3RlckRhdGFVc2Vyc0NvbGxlY3Rpb24pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjaGVtYVZlbnRhc0NvbGxlY3Rpb24gPSBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICBhZG1pbklkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgfSxcclxuICB1c2VySWQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIG9wdGlvbmFsOiBmYWxzZSxcclxuICB9LFxyXG4gIGNyZWF0ZWRBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGF1dG9WYWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5zZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Vwc2VydCkge1xyXG4gICAgICAgIHJldHVybiB7JHNldE9uSW5zZXJ0OiBuZXcgRGF0ZSgpfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVuc2V0KCk7ICAvLyBQcmV2ZW50IHVzZXIgZnJvbSBzdXBwbHlpbmcgdGhlaXIgb3duIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgfSxcclxuICBjb2JyYWRvOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gIH0sXHJcbiAgY29icmFkb0FsQWRtaW46IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBwcmVjaW86IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHRWYWx1ZTogMCxcclxuICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gIH0sXHJcbiAgY29tZW50YXJpbzoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBnYW5hbmNpYXNBZG1pbjp7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0VmFsdWU6IDAsXHJcbiAgICBvcHRpb25hbDp0cnVlXHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG5WZW50YXNDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFWZW50YXNDb2xsZWN0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTY2hlbWFQcmVjaW9zQ29sbGVjdGlvbiA9IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gIHVzZXJJZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgb3B0aW9uYWw6IGZhbHNlLFxyXG4gIH0sXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgYXV0b1ZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaXNJbnNlcnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVXBzZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIHskc2V0T25JbnNlcnQ6IG5ldyBEYXRlKCl9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudW5zZXQoKTsgIC8vIFByZXZlbnQgdXNlciBmcm9tIHN1cHBseWluZyB0aGVpciBvd24gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wdGlvbmFsOiBmYWxzZSxcclxuICB9LFxyXG4gIHByZWNpbzoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICB0eXBlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBvcHRpb25hbDogZmFsc2UsXHJcbiAgfSxcclxuICBtZWdhczoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBoZXJlZGFEZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXHJcbiAgfSxcclxuICBjb21lbnRhcmlvOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIGRldGFsbGVzOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcblByZWNpb3NDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFQcmVjaW9zQ29sbGVjdGlvbik7XHJcblxyXG5leHBvcnQgY29uc3QgU2NoZW1hTG9nc0NvbGxlY3Rpb24gPSBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICB0eXBlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmdcclxuICB9LFxyXG4gIHVzZXJBZG1pbjoge1xyXG4gICAgdHlwZTogU3RyaW5nXHJcbiAgfSxcclxuICB1c2VyQWZlY3RhZG86IHtcclxuICAgIHR5cGU6IFN0cmluZ1xyXG4gIH0sXHJcbiAgbWVzc2FnZToge1xyXG4gICAgdHlwZTogU3RyaW5nXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBhdXRvVmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0luc2VydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVcHNlcnQpIHtcclxuICAgICAgICByZXR1cm4geyRzZXRPbkluc2VydDogbmV3IERhdGUoKX07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51bnNldCgpOyAgLy8gUHJldmVudCB1c2VyIGZyb20gc3VwcGx5aW5nIHRoZWlyIG93biB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59KTtcclxuXHJcbkxvZ3NDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFMb2dzQ29sbGVjdGlvbik7XHJcblxyXG5leHBvcnQgY29uc3QgU2NoZW1hT25saW5lQ29sbGVjdGlvbiA9IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gIGFkZHJlc3M6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGNvbm5lY3Rpb25JZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICB1c2VySWQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gIH0sXHJcbiAgbG9naW5BdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGF1dG9WYWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5zZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Vwc2VydCkge1xyXG4gICAgICAgIHJldHVybiB7JHNldE9uSW5zZXJ0OiBuZXcgRGF0ZSgpfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVuc2V0KCk7ICAvLyBQcmV2ZW50IHVzZXIgZnJvbSBzdXBwbHlpbmcgdGhlaXIgb3duIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIGhvc3RuYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIG1lZ2FzR2FzdGFkb3NpbkJ5dGVzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0VmFsdWU6IDAsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIG1lZ2FzR2FzdGFkb3NpbkJ5dGVzR2VuZXJhbDoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG5PbmxpbmVDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFPbmxpbmVDb2xsZWN0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTY2hlbWFNZW5zYWplc0NvbGxlY3Rpb24gPSBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICBmcm9tIDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgdG8gOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICBtZW5zYWplIDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBsZWlkbyA6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBhdXRvVmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0luc2VydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVcHNlcnQpIHtcclxuICAgICAgICByZXR1cm4geyRzZXRPbkluc2VydDogbmV3IERhdGUoKX07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51bnNldCgpOyAgLy8gUHJldmVudCB1c2VyIGZyb20gc3VwcGx5aW5nIHRoZWlyIG93biB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0eXBlOntcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJ0ZXh0XCIsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9XHJcbn0pO1xyXG5cclxuTWVuc2FqZXNDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFNZW5zYWplc0NvbGxlY3Rpb24pO1xyXG5leHBvcnQgY29uc3QgU2NoZW1hVFZDb2xsZWN0aW9uID0gbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgbm9tYnJlVFY6e1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgdXJsVFY6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIHVybEJhY2tncm91bmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZywgICAgXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICBkZXNjcmlwY2lvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAgbW9zdHJhcjp7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBhdXRvVmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0luc2VydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVcHNlcnQpIHtcclxuICAgICAgICByZXR1cm4geyRzZXRPbkluc2VydDogbmV3IERhdGUoKX07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51bnNldCgpOyAgLy8gUHJldmVudCB1c2VyIGZyb20gc3VwcGx5aW5nIHRoZWlyIG93biB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB2aXN0YXM6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHRWYWx1ZTogMCxcclxuICB9LFxyXG59KTtcclxuXHJcblRWQ29sbGVjdGlvbi5hdHRhY2hTY2hlbWEoU2NoZW1hVFZDb2xsZWN0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTY2hlbWFQZWxpc0NvbGxlY3Rpb24gPSBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICBub21icmVQZWxpOntcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIHVybFBlbGk6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIHVybEJhY2tncm91bmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGRlc2NyaXBjaW9uOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICB1cmxUcmFpbGVyOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICBvcHRpb25hbDogdHJ1ZVxyXG4gIH0sXHJcbiAgdGFtYW5vOntcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIG1vc3RyYXI6e1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgYXV0b1ZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaXNJbnNlcnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVXBzZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIHskc2V0T25JbnNlcnQ6IG5ldyBEYXRlKCl9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudW5zZXQoKTsgIC8vIFByZXZlbnQgdXNlciBmcm9tIHN1cHBseWluZyB0aGVpciBvd24gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3VidGl0dWxvOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIHZpc3Rhczoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxyXG4gIH0sXHJcbiAgeWVhcjoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAxOTAwLFxyXG4gICAgLy8gbWluOiAxOTAwLFxyXG4gIH0sXHJcbiAgdGV4dFN1YnRpdGxlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIGNsYXNpZmljYWNpb246IHtcclxuICAgIHR5cGU6IEFycmF5LFxyXG4gICAgZGVmYXVsdFZhbHVlOiBbXSxcclxuICB9LFxyXG4gICdjbGFzaWZpY2FjaW9uLiQnOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGlkaW1kYjp7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9XHJcbn0pO1xyXG5cclxuUGVsaXNDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFQZWxpc0NvbGxlY3Rpb24pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjaGVtYURlc2NhcmdhQ29sbGVjdGlvbiA9IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gIGlkRmlsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgbm9tYnJlRmlsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgdGFtYW5vRmlsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBjb21lbnRhcmlvczoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBhdXRvVmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0luc2VydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNVcHNlcnQpIHtcclxuICAgICAgICByZXR1cm4geyRzZXRPbkluc2VydDogbmV3IERhdGUoKX07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51bnNldCgpOyAgLy8gUHJldmVudCB1c2VyIGZyb20gc3VwcGx5aW5nIHRoZWlyIG93biB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZXNjYXJnYWRvUG9yOntcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIHRodW1ibmFpbDp7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICB1cmxSZWFsOntcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIHVybDp7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIHZpc3Rhczoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuRGVzY2FyZ2FzQ29sbGVjdGlvbi5hdHRhY2hTY2hlbWEoU2NoZW1hRGVzY2FyZ2FDb2xsZWN0aW9uKVxyXG5cclxuZXhwb3J0IGNvbnN0IFNjaGVtYVNlcnZlcnNDb2xsZWN0aW9uID0gbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgZG9tYWluOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICBpcDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgYWN0aXZlOntcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0VmFsdWU6IHRydWUsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9LFxyXG4gIGRldGFpbHM6e1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgb3B0aW9uYWw6dHJ1ZVxyXG4gIH0sXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgYXV0b1ZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaXNJbnNlcnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVXBzZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIHskc2V0T25JbnNlcnQ6IG5ldyBEYXRlKCl9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudW5zZXQoKTsgIC8vIFByZXZlbnQgdXNlciBmcm9tIHN1cHBseWluZyB0aGVpciBvd24gdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuU2VydmVyc0NvbGxlY3Rpb24uYXR0YWNoU2NoZW1hKFNjaGVtYVNlcnZlcnNDb2xsZWN0aW9uKVxyXG5cclxuZXhwb3J0IGNvbnN0IFNjaGVtYUZpbGVzQ29sbGVjdGlvbiA9IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gIG5vbWJyZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgb3B0aW9uYWw6ZmFsc2VcclxuXHJcbiAgfSxcclxuICB1cmw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIG9wdGlvbmFsOmZhbHNlXHJcbiAgfSxcclxuICBkZXRhaWxzOntcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgIG9wdGlvbmFsOnRydWVcclxuICB9LFxyXG4gIGNyZWF0ZWRBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGF1dG9WYWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5zZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Vwc2VydCkge1xyXG4gICAgICAgIHJldHVybiB7JHNldE9uSW5zZXJ0OiBuZXcgRGF0ZSgpfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVuc2V0KCk7ICAvLyBQcmV2ZW50IHVzZXIgZnJvbSBzdXBwbHlpbmcgdGhlaXIgb3duIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuRmlsZXNDb2xsZWN0aW9uLmF0dGFjaFNjaGVtYShTY2hlbWFGaWxlc0NvbGxlY3Rpb24pXHJcblxyXG5GaWxlc0NvbGxlY3Rpb24uYWxsb3coe1xyXG4gIGluc2VydChkb2MpIHtcclxuICAgIC8vIFRoZSB1c2VyIG11c3QgYmUgbG9nZ2VkIGluIGFuZCB0aGUgZG9jdW1lbnQgbXVzdCBiZSBvd25lZCBieSB0aGUgdXNlci5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIENhbiBvbmx5IGNoYW5nZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9LFxyXG5cclxuICByZW1vdmUodXNlcklkLCBkb2MpIHtcclxuICAgIC8vIENhbiBvbmx5IHJlbW92ZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyBfaWQ6IHVzZXJJZCB9KS5wcm9maWxlLnJvbGUgPT0gXCJhZG1pblwiO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuTG9nc0NvbGxlY3Rpb24uYWxsb3coe1xyXG4gIGluc2VydChkb2MpIHtcclxuICAgIC8vIFRoZSB1c2VyIG11c3QgYmUgbG9nZ2VkIGluIGFuZCB0aGUgZG9jdW1lbnQgbXVzdCBiZSBvd25lZCBieSB0aGUgdXNlci5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIENhbiBvbmx5IGNoYW5nZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9LFxyXG5cclxuICByZW1vdmUodXNlcklkLCBkb2MpIHtcclxuICAgIC8vIENhbiBvbmx5IHJlbW92ZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyBfaWQ6IHVzZXJJZCB9KS5wcm9maWxlLnJvbGUgPT0gXCJhZG1pblwiO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuUmVnaXN0ZXJEYXRhVXNlcnNDb2xsZWN0aW9uLmFsbG93KHtcclxuICBpbnNlcnQoZG9jKSB7XHJcbiAgICAgIC8vIFRoZSB1c2VyIG11c3QgYmUgbG9nZ2VkIGluIGFuZCB0aGUgZG9jdW1lbnQgbXVzdCBiZSBvd25lZCBieSB0aGUgdXNlci5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAvLyBDYW4gb25seSBjaGFuZ2UgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICByZW1vdmUodXNlcklkLCBkb2MpIHtcclxuICAgICAgLy8gQ2FuIG9ubHkgcmVtb3ZlIHlvdXIgb3duIGRvY3VtZW50cy5cclxuICAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kT25lKHsgX2lkOiB1c2VySWQgfSkucHJvZmlsZS5yb2xlID09IFwiYWRtaW5cIjtcclxuICAgIH0sXHJcbn0pXHJcbk9ubGluZUNvbGxlY3Rpb24uYWxsb3coe1xyXG4gIGluc2VydChkb2MpIHtcclxuICAgICAgLy8gVGhlIHVzZXIgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIHRoZSBkb2N1bWVudCBtdXN0IGJlIG93bmVkIGJ5IHRoZSB1c2VyLlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgIC8vIENhbiBvbmx5IGNoYW5nZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICBcclxuICAgIHJlbW92ZSh1c2VySWQsIGRvYykge1xyXG4gICAgICAvLyBDYW4gb25seSByZW1vdmUgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbn0pXHJcblRWQ29sbGVjdGlvbi5hbGxvdyh7XHJcbiAgaW5zZXJ0KGRvYykge1xyXG4gICAgICAvLyBUaGUgdXNlciBtdXN0IGJlIGxvZ2dlZCBpbiBhbmQgdGhlIGRvY3VtZW50IG11c3QgYmUgb3duZWQgYnkgdGhlIHVzZXIuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICBcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgLy8gQ2FuIG9ubHkgY2hhbmdlIHlvdXIgb3duIGRvY3VtZW50cy5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgcmVtb3ZlKHVzZXJJZCwgZG9jKSB7XHJcbiAgICAgIC8vIENhbiBvbmx5IHJlbW92ZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZE9uZSh7IF9pZDogdXNlcklkIH0pLnByb2ZpbGUucm9sZSA9PSBcImFkbWluXCI7XHJcbiAgICB9LFxyXG59KVxyXG5QZWxpc0NvbGxlY3Rpb24uYWxsb3coe1xyXG4gICAgaW5zZXJ0KGRvYykge1xyXG4gICAgICAgIC8vIFRoZSB1c2VyIG11c3QgYmUgbG9nZ2VkIGluIGFuZCB0aGUgZG9jdW1lbnQgbXVzdCBiZSBvd25lZCBieSB0aGUgdXNlci5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gQ2FuIG9ubHkgY2hhbmdlIHlvdXIgb3duIGRvY3VtZW50cy5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICByZW1vdmUodXNlcklkLCBkb2MpIHtcclxuICAgICAgICAvLyBDYW4gb25seSByZW1vdmUgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZE9uZSh7IF9pZDogdXNlcklkIH0pLnByb2ZpbGUucm9sZSA9PSBcImFkbWluXCI7XHJcbiAgICAgIH0sXHJcbn0pXHJcbkRlc2Nhcmdhc0NvbGxlY3Rpb24uYWxsb3coe1xyXG4gIGluc2VydChkb2MpIHtcclxuICAgICAgLy8gVGhlIHVzZXIgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIHRoZSBkb2N1bWVudCBtdXN0IGJlIG93bmVkIGJ5IHRoZSB1c2VyLlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICB1cGRhdGUodXNlcklkLCBkb2MsIGZpZWxkcywgbW9kaWZpZXIpIHtcclxuICAgICAgLy8gQ2FuIG9ubHkgY2hhbmdlIHlvdXIgb3duIGRvY3VtZW50cy5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgcmVtb3ZlKHVzZXJJZCwgZG9jKSB7XHJcbiAgICAgIC8vIENhbiBvbmx5IHJlbW92ZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZE9uZSh7IF9pZDogdXNlcklkIH0pLnByb2ZpbGUucm9sZSA9PSBcImFkbWluXCI7XHJcbiAgICB9LFxyXG59KVxyXG5NZXRlb3IudXNlcnMuYWxsb3coe1xyXG4gIGluc2VydChkb2MpIHtcclxuICAgICAgLy8gVGhlIHVzZXIgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIHRoZSBkb2N1bWVudCBtdXN0IGJlIG93bmVkIGJ5IHRoZSB1c2VyLlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICB1cGRhdGUodXNlcklkLCBkb2MsIGZpZWxkcywgbW9kaWZpZXIpIHtcclxuICAgICAgLy8gQ2FuIG9ubHkgY2hhbmdlIHlvdXIgb3duIGRvY3VtZW50cy5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgcmVtb3ZlKHVzZXJJZCwgZG9jKSB7XHJcbiAgICAgIC8vIENhbiBvbmx5IHJlbW92ZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZE9uZSh7IF9pZDogdXNlcklkIH0pLnByb2ZpbGUucm9sZSA9PSBcImFkbWluXCI7XHJcbiAgICB9LFxyXG59KVxyXG5WZW50YXNDb2xsZWN0aW9uLmFsbG93KHtcclxuICBpbnNlcnQoZG9jKSB7XHJcbiAgICAgIC8vIFRoZSB1c2VyIG11c3QgYmUgbG9nZ2VkIGluIGFuZCB0aGUgZG9jdW1lbnQgbXVzdCBiZSBvd25lZCBieSB0aGUgdXNlci5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgdXBkYXRlKHVzZXJJZCwgZG9jLCBmaWVsZHMsIG1vZGlmaWVyKSB7XHJcbiAgICAgIC8vIENhbiBvbmx5IGNoYW5nZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICBcclxuICAgIHJlbW92ZSh1c2VySWQsIGRvYykge1xyXG4gICAgICAvLyBDYW4gb25seSByZW1vdmUgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyBfaWQ6IHVzZXJJZCB9KS5wcm9maWxlLnJvbGUgPT0gXCJhZG1pblwiO1xyXG4gICAgfSxcclxufSlcclxuTWVuc2FqZXNDb2xsZWN0aW9uLmFsbG93KHtcclxuICBpbnNlcnQoZG9jKSB7XHJcbiAgICAgIC8vIFRoZSB1c2VyIG11c3QgYmUgbG9nZ2VkIGluIGFuZCB0aGUgZG9jdW1lbnQgbXVzdCBiZSBvd25lZCBieSB0aGUgdXNlci5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIFxyXG4gICAgdXBkYXRlKHVzZXJJZCwgZG9jLCBmaWVsZHMsIG1vZGlmaWVyKSB7XHJcbiAgICAgIC8vIENhbiBvbmx5IGNoYW5nZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICBcclxuICAgIHJlbW92ZSh1c2VySWQsIGRvYykge1xyXG4gICAgICAvLyBDYW4gb25seSByZW1vdmUgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbn0pXHJcblNlcnZlcnNDb2xsZWN0aW9uLmFsbG93KHtcclxuICBpbnNlcnQoZG9jKSB7XHJcbiAgICAvLyBUaGUgdXNlciBtdXN0IGJlIGxvZ2dlZCBpbiBhbmQgdGhlIGRvY3VtZW50IG11c3QgYmUgb3duZWQgYnkgdGhlIHVzZXIuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9LFxyXG5cclxuICB1cGRhdGUodXNlcklkLCBkb2MsIGZpZWxkcywgbW9kaWZpZXIpIHtcclxuICAgIC8vIENhbiBvbmx5IGNoYW5nZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9LFxyXG5cclxuICByZW1vdmUodXNlcklkLCBkb2MpIHtcclxuICAgIC8vIENhbiBvbmx5IHJlbW92ZSB5b3VyIG93biBkb2N1bWVudHMuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9LFxyXG59KTtcclxuXHJcblByZWNpb3NDb2xsZWN0aW9uLmFsbG93KHtcclxuICBpbnNlcnQodXNlcklkLGRvYykge1xyXG4gICAgLy8gVGhlIHVzZXIgbXVzdCBiZSBsb2dnZWQgaW4gYW5kIHRoZSBkb2N1bWVudCBtdXN0IGJlIG93bmVkIGJ5IHRoZSB1c2VyLlxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKHVzZXJJZCwgZG9jLCBmaWVsZHMsIG1vZGlmaWVyKSB7XHJcbiAgICAvLyBDYW4gb25seSBjaGFuZ2UgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlKHVzZXJJZCwgZG9jKSB7XHJcbiAgICAvLyBDYW4gb25seSByZW1vdmUgeW91ciBvd24gZG9jdW1lbnRzLlxyXG4gICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kT25lKHsgX2lkOiB1c2VySWQgfSkucHJvZmlsZS5yb2xlID09IFwiYWRtaW5cIjtcclxuICB9LFxyXG59KTtcclxuIiwidmFyIFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpLlByb21pc2U7XHJcbnZhciBleGVjID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWM7XHJcblxyXG4vLyByZXR1ZW4gYSBwcm9taXNlKHRleHQpXHJcbmZ1bmN0aW9uIGV4ZWN1dGUoY29tbWFuZCkge1xyXG4gIHZhciBjbWQgPSBjb21tYW5kO1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBleGVjKGNtZCwgZnVuY3Rpb24gKGVycm9yLCBzdGRvdXQsIHN0ZGVycikge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShzdGRvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4ZWN1dGU7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSdcclxuaW1wb3J0IGV4ZWN1dGUgZnJvbSAnLi9FamVjdXRhcidcclxuaW1wb3J0IHtcclxuICBPbmxpbmVDb2xsZWN0aW9uLFxyXG4gIFBlbGlzQ29sbGVjdGlvbixcclxuICBNZW5zYWplc0NvbGxlY3Rpb24sXHJcbiAgU2VydmVyc0NvbGxlY3Rpb24sXHJcbiAgUHJlY2lvc0NvbGxlY3Rpb24sXHJcbiAgVmVudGFzQ29sbGVjdGlvbixcclxuICBGaWxlc0NvbGxlY3Rpb24sXHJcbiAgVmVyc2lvbnNDb2xsZWN0aW9uLFxyXG4gIExvZ3NDb2xsZWN0aW9uLFxyXG4gIERlc2Nhcmdhc0NvbGxlY3Rpb24sXHJcbiAgVFZDb2xsZWN0aW9uLFxyXG4gIFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvblxyXG59IGZyb20gXCIuLi9pbXBvcnRzL3VpL3BhZ2VzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zXCI7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcbiAgY29uc29sZS5sb2coXCJDYXJnYW5kbyBNw6l0b2Rvcy4uLlwiKTtcclxuICBmdW5jdGlvbiBzdHJlYW1Ub1N0cmluZyhzdHJlYW0pIHtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3RyZWFtLm9uKCdkYXRhJywgKGNodW5rKSA9PiBjaHVua3MucHVzaChCdWZmZXIuZnJvbShjaHVuaykpKTtcclxuICAgICAgc3RyZWFtLm9uKCdlcnJvcicsIChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgc3RyZWFtLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKEJ1ZmZlci5jb25jYXQoY2h1bmtzKS50b1N0cmluZygndXRmOCcpKSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgTWV0ZW9yLm1ldGhvZHMoe1xyXG4gICAgZXhlY3V0ZTogYXN5bmMgZnVuY3Rpb24gKGNvbW1hbmQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZShjb21tYW5kKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldHVzZXJzOiBmdW5jdGlvbiAoZmlsdGVyKSB7XHJcbiAgICAgIHJldHVybiBNZXRlb3IudXNlcnNcclxuICAgICAgICAuZmluZChmaWx0ZXIgPyBmaWx0ZXIgOiB7fSwgeyBzb3J0OiB7IHZwbmlwOiAxIH0gfSlcclxuICAgICAgICAuZmV0Y2goKTtcclxuICAgIH0sXHJcbiAgICBzZXRPbmxpbmVWUE46IGZ1bmN0aW9uIChpZCwgZGF0YWNoYW5nZSkge1xyXG4gICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLnVwZGF0ZShpZCwgeyAkc2V0OiBkYXRhY2hhbmdlIH0pO1xyXG4gICAgfSxcclxuICAgIGFkZFVzZXI6IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih1c2VyKTtcclxuICAgICAgICByZXR1cm4gaWQgPyBcIlVzdWFyaW8gYWdyZWdhZG8gY29ycmVjdGFtZW50ZSEhIVwiIDogXCJcIjtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZW5kZW1haWw6IGZ1bmN0aW9uICh1c2VyLCB0ZXh0LCBzdWJqZWN0KSB7XHJcbiAgICAgIGxldCBhZG1pbiA9IE1ldGVvci51c2Vycy5maW5kT25lKHtcclxuICAgICAgICBfaWQ6IHVzZXIuYmxvcXVlYWRvRGVzYmxvcXVlYWRvUG9yLFxyXG4gICAgICAgIFwicHJvZmlsZS5yb2xlXCI6IFwiYWRtaW5cIixcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGxldCBlbWFpbHMgPSAoYWRtaW5cclxuICAgICAgLy8gICA/IChhZG1pbi5lbWFpbHNbMF1cclxuICAgICAgLy8gICAgID8gKGFkbWluLmVtYWlsc1swXS5hZGRyZXNzXHJcbiAgICAgIC8vICAgICAgID8gWydjYXJsb3NtYmluZjk0MDVAaWNsb3VkLmNvbScsIGFkbWluLmVtYWlsc1swXS5hZGRyZXNzXVxyXG4gICAgICAvLyAgICAgICA6IFsnY2FybG9zbWJpbmY5NDA1QGljbG91ZC5jb20nXSlcclxuICAgICAgLy8gICAgIDogWydjYXJsb3NtYmluZjk0MDVAaWNsb3VkLmNvbSddXHJcbiAgICAgIC8vICAgKVxyXG4gICAgICAvLyAgIDogWydjYXJsb3NtYmluZjk0MDVAaWNsb3VkLmNvbSddKVxyXG4gICAgICBsZXQgZW1haWxzID1cclxuICAgICAgICBhZG1pbiAmJlxyXG4gICAgICAgICAgYWRtaW4uZW1haWxzWzBdICYmXHJcbiAgICAgICAgICBhZG1pbi5lbWFpbHNbMF0uYWRkcmVzcyAhPSBcImNhcmxvc21iaW5mQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICA/IHVzZXIuZW1haWxzWzBdICYmIHVzZXIuZW1haWxzWzBdLmFkZHJlc3NcclxuICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgXCJjYXJsb3NtYmluZkBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICBhZG1pbi5lbWFpbHNbMF0uYWRkcmVzcyxcclxuICAgICAgICAgICAgICB1c2VyLmVtYWlsc1swXS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIDogW1wiY2FybG9zbWJpbmZAZ21haWwuY29tXCIsIGFkbWluLmVtYWlsc1swXS5hZGRyZXNzXVxyXG4gICAgICAgICAgOiB1c2VyLmVtYWlsc1swXSAmJlxyXG4gICAgICAgICAgICB1c2VyLmVtYWlsc1swXS5hZGRyZXNzICYmXHJcbiAgICAgICAgICAgIHVzZXIuZW1haWxzWzBdLmFkZHJlc3MgIT0gXCJjYXJsb3NtYmluZkBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICA/IFtcImNhcmxvc21iaW5mQGdtYWlsLmNvbVwiLCB1c2VyLmVtYWlsc1swXS5hZGRyZXNzXVxyXG4gICAgICAgICAgICA6IFtcImNhcmxvc21iaW5mQGdtYWlsLmNvbVwiXTtcclxuICAgICAgcmVxdWlyZShcImdtYWlsLXNlbmRcIikoe1xyXG4gICAgICAgIHVzZXI6IFwiY2FybG9zbWJpbmZAZ21haWwuY29tXCIsXHJcbiAgICAgICAgcGFzczogXCJMYXN0dW5hc0AxMjNcIixcclxuICAgICAgICB0bzogZW1haWxzLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIH0pKHRleHQsIChlcnJvciwgcmVzdWx0LCBmdWxsUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZ1bGxSZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kTWVuc2FqZTogZnVuY3Rpb24gKHVzZXIsIHRleHQsIHN1YmplY3QpIHtcclxuICAgICAgTWVuc2FqZXNDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgZnJvbTogdXNlci5ibG9xdWVhZG9EZXNibG9xdWVhZG9Qb3JcclxuICAgICAgICAgID8gdXNlci5ibG9xdWVhZG9EZXNibG9xdWVhZG9Qb3JcclxuICAgICAgICAgIDogTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyB1c2VybmFtZTogQXJyYXkoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5hZG1pbmlzdHJhZG9yZXMpWzBdWzBdIH0pLl9pZCxcclxuICAgICAgICB0bzogdXNlci5faWQsXHJcbiAgICAgICAgbWVuc2FqZTogdGV4dC50ZXh0LFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29uc29sZS5sb2codGV4dCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluc2VydFBlbGlzOiBhc3luYyBmdW5jdGlvbiAocGVsaWN1bGEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwZWxpKVxyXG4gICAgICAvLyAgY29uc3QgaW5zZXJ0UGVsaSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGV4aXN0ID0gYXdhaXQgUGVsaXNDb2xsZWN0aW9uLmZpbmRPbmUoeyB1cmxQZWxpOiBwZWxpY3VsYS5wZWxpIH0pO1xyXG4gICAgICBsZXQgaWQgPSBleGlzdFxyXG4gICAgICAgID8gZXhpc3QuX2lkXHJcbiAgICAgICAgOiBhd2FpdCBQZWxpc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgIG5vbWJyZVBlbGk6IHBlbGljdWxhLm5vbWJyZSxcclxuICAgICAgICAgIHVybFBlbGk6IHBlbGljdWxhLnBlbGksXHJcbiAgICAgICAgICB1cmxCYWNrZ3JvdW5kOiBwZWxpY3VsYS5wb3N0ZXIsXHJcbiAgICAgICAgICBkZXNjcmlwY2lvbjogcGVsaWN1bGEubm9tYnJlLFxyXG4gICAgICAgICAgdGFtYW5vOiA3OTcsXHJcbiAgICAgICAgICBtb3N0cmFyOiB0cnVlLFxyXG4gICAgICAgICAgc3VidGl0dWxvOiBwZWxpY3VsYS5zdWJ0aXRsZSxcclxuICAgICAgICAgIHllYXI6IHBlbGljdWxhLnllYXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGxldCBwZWxpID0gYXdhaXQgUGVsaXNDb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IGlkIH0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwZWxpKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2YXIgc3J0MnZ0dCA9IGF3YWl0IHJlcXVpcmUoXCJzcnQtdG8tdnR0XCIpO1xyXG4gICAgICAgIHZhciBmcyA9IGF3YWl0IHJlcXVpcmUoXCJmc1wiKTtcclxuICAgICAgICB2YXIgYXBwUm9vdCA9IGF3YWl0IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xyXG4gICAgICAgIHZhciBzdWJ0aXR1bG9GaWxlID1cclxuICAgICAgICAgIGFwcFJvb3QucGF0aCArIFwiL3B1YmxpYy92aWRlb3Mvc3VidGl0dWxvL1wiICsgaWQgKyBcIi52dHRcIjtcclxuICAgICAgICBjb25zdCBodHRwcyA9IGF3YWl0IHJlcXVpcmUoXCJodHRwc1wiKTtcclxuXHJcbiAgICAgICAgLy8gIWZzLmV4aXN0c1N5bmMoYXBwUm9vdC5wYXRoICsgXCIvcHVibGljL3ZpZGVvcy9zdWJ0aXR1bG9cIilcclxuICAgICAgICAvLyAgID8gZnMubWtkaXJTeW5jKGFwcFJvb3QucGF0aCArIFwiL3B1YmxpYy92aWRlb3Mvc3VidGl0dWxvL1wiKVxyXG4gICAgICAgIC8vICAgOiBcIlwiO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBmaWxlID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oc3VidGl0dWxvRmlsZSk7XHJcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgcGVsaSAmJlxyXG4gICAgICAgICAgcGVsaS5zdWJ0aXR1bG8gJiZcclxuICAgICAgICAgIChhd2FpdCBodHRwcy5nZXQocGVsaS5zdWJ0aXR1bG8sIGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXNwb25zZS5waXBlKHNydDJ2dHQoKSk7XHJcbiAgICAgICAgICAgICAgLy8gc3RyZWFtLm9uKFwiZmluaXNoXCIsIGZ1bmN0aW9uICgpIHt9KTtcclxuICAgICAgICAgICAgICBzdHJlYW1Ub1N0cmluZyhzdHJlYW0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgUGVsaXNDb2xsZWN0aW9uLnVwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7IF9pZDogaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdWJ0aXRsZTogZGF0YS50b1N0cmluZyhcInV0ZjhcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBtdWx0aTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgYEFjdHVhbGl6YWRvIHN1YnRpdHVsbyBkZSBsYSBQZWxpOiAke3BlbGkubm9tYnJlUGVsaX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZGJJZCA9IHJlcXVpcmUoXCJpbWRiLWlkXCIpO1xyXG4gICAgICAgIGNvbnN0IElNRGIgPSByZXF1aXJlKFwiaW1kYi1saWdodFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGlkaW1kYiA9IGF3YWl0IGltZGJJZChwZWxpLm5vbWJyZVBlbGkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSUQgZGUgSU1EQiA9PiBcIiArIGlkaW1kYilcclxuXHJcbiAgICAgICAgUGVsaXNDb2xsZWN0aW9uLnVwZGF0ZShcclxuICAgICAgICAgIHsgX2lkOiBpZCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgaWRpbWRiOiBpZGltZGIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBtdWx0aTogdHJ1ZSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYXdhaXQgSU1EYi50cmFpbGVyKGlkaW1kYiwgKHVybCkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codXJsKSAgLy8gb3V0cHV0IGlzIGRpcmVjdCBtcDQgdXJsIChhbHNvIGhhdmUgZXhwaXJhdGlvbiB0aW1lb3V0KVxyXG5cclxuICAgICAgICAgIFBlbGlzQ29sbGVjdGlvbi51cGRhdGUoXHJcbiAgICAgICAgICAgIHsgX2lkOiBpZCB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgdXJsVHJhaWxlcjogdXJsLFxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc2lmaWNhY2lvbjogZGV0YWlscy5HZW5yZXMuc3BsaXQoXCIsIFwiKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IElNRGIuZmV0Y2goaWRpbWRiLCAoZGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGV0YWlscykgIC8vIGV0Yy4uLlxyXG4gICAgICAgICAgUGVsaXNDb2xsZWN0aW9uLnVwZGF0ZShcclxuICAgICAgICAgICAgeyBfaWQ6IGlkIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbjogZGV0YWlscy5QbG90LFxyXG4gICAgICAgICAgICAgICAgY2xhc2lmaWNhY2lvbjogZGV0YWlscy5HZW5yZXMuc3BsaXQoXCIsIFwiKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IG11bHRpOiB0cnVlIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBleGlzdFxyXG4gICAgICAgICAgICA/IGBBY3R1YWxpemFkYSBsYSBQZWxpY3VsYTogJHtleGlzdC5ub21icmVQZWxpfWBcclxuICAgICAgICAgICAgOiBcIlNlIEluc2VydMOzIENvcnJlY3RhbWVudGUgbGEgUGVsw61jdWxhXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3IuZXJyb3IgOj4gXCIgKyBlcnJvci5lcnJvcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5yZWFzb24gOj4gXCIgKyBlcnJvci5yZWFzb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvci5tZXNzYWdlIDo+ICR7ZXJyb3IubWVzc2FnZX1cXG5cclxuICAgICAgICAgICAgICBlcnJvci5yZWFzb24gOj4gJHtlcnJvci5yZWFzb259YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5lcnJvclR5cGUgOj4gXCIgKyBlcnJvci5lcnJvclR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZWFzb246IGVycm9yLnJlYXNvbixcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBlcnJvclR5cGU6IGVycm9yLnR5cGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldExpc3RhZG9zUHJlY2lvc09maWNpYWxlczogYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBsZXQgdXNlckFkbWluID0gYXdhaXQgTWV0ZW9yLmNhbGwoJ2dldEFkbWluUHJpbmNpcGFsJyk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByZWNpb3NDb2xsZWN0aW9uLmZpbmQoe30pLmZldGNoKClcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRBZG1pblByaW5jaXBhbDogYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgLy8vLy8vL1JFVklTQVIgRU4gQUREVkVOVEFTT05MWSAgZWwgZGVzY3VlbnRvIHF1ZSBzZSBkZWJlIGRlIGhhY2VyXHJcbiAgICAgIC8vIGxldCBhZG1pbiA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKGFkbWluSWQpXHJcbiAgICAgIC8vIGxldCBwcmVjaW8gPSBQcmVjaW9zQ29sbGVjdGlvbi5maW5kT25lKHByZWNpb2lkKVxyXG5cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGFkbWluUHJpbmNpcGFsID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyB1c2VybmFtZTogTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5hZG1pbmlzdHJhZG9yZXNbMF0gfSlcclxuICAgICAgICByZXR1cm4gYWRtaW5QcmluY2lwYWwgPyBhZG1pblByaW5jaXBhbCA6IG51bGxcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBnZXRQcmVjaW9PZmljaWFsOiBhc3luYyAoY29tcHJhKSA9PiB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBhZG1pblByaW5jaXBhbCA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHsgdXNlcm5hbWU6IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuYWRtaW5pc3RyYWRvcmVzWzBdIH0pXHJcblxyXG4gICAgICAgIGxldCBwcmVjaW9PZmljaWFsID0gYXdhaXQgUHJlY2lvc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgICAgICB1c2VySWQ6IGFkbWluUHJpbmNpcGFsLl9pZCxcclxuICAgICAgICAgIHR5cGU6IGNvbXByYS50eXBlLFxyXG4gICAgICAgICAgbWVnYXM6IGNvbXByYS5tZWdhc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBwcmVjaW9PZmljaWFsID8gcHJlY2lvT2ZpY2lhbCA6IG51bGxcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBhZGRWZW50YXNPbmx5OiBhc3luYyAodXNlckNoYW5nZWlkLCBhZG1pbklkLCBjb21wcmEpID0+IHtcclxuXHJcbiAgICAgIC8vLy8vLy9SRVZJU0FSIEVOIEFERFZFTlRBU09OTFkgIGVsIGRlc2N1ZW50byBxdWUgc2UgZGViZSBkZSBoYWNlclxyXG4gICAgICBsZXQgdXNlckNoYW5nZSA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJDaGFuZ2VpZClcclxuICAgICAgLy8gbGV0IGFkbWluID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUoYWRtaW5JZClcclxuICAgICAgLy8gbGV0IHByZWNpbyA9IFByZWNpb3NDb2xsZWN0aW9uLmZpbmRPbmUocHJlY2lvaWQpXHJcbiAgICAgIGxldCBhZG1pblByaW5jaXBhbCA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHsgdXNlcm5hbWU6IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuYWRtaW5pc3RyYWRvcmVzWzBdIH0pXHJcblxyXG4gICAgICBsZXQgcHJlY2lvT2ZpY2lhbCA9IGF3YWl0IE1ldGVvci5jYWxsKCdnZXRQcmVjaW9PZmljaWFsJywgY29tcHJhKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbXByYSAmJiBhd2FpdCBWZW50YXNDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgICBhZG1pbklkOiBhZG1pbklkLFxyXG4gICAgICAgICAgdXNlcklkOiB1c2VyQ2hhbmdlaWQsXHJcbiAgICAgICAgICBwcmVjaW86IHByZWNpb09maWNpYWwgPyBwcmVjaW9PZmljaWFsLnByZWNpbyA6IGNvbXByYS5wcmVjaW8sXHJcbiAgICAgICAgICBnYW5hbmNpYXNBZG1pbjogcHJlY2lvT2ZpY2lhbCA/IGNvbXByYS5wcmVjaW8gLSBwcmVjaW9PZmljaWFsLnByZWNpbyA6IDAsXHJcbiAgICAgICAgICBjb21lbnRhcmlvOiBjb21wcmEuY29tZW50YXJpb1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBjb21wcmEgPyBjb21wcmEuY29tZW50YXJpbyA6IGBObyBzZSBlbmNvbnRybyBQcmVjaW8gYSBsYSBvZmVydGEgZXN0YWJsZWNpZGEgZW4gZWwgdXN1YXJpbzogJHt1c2VyQ2hhbmdlLnVzZXJuYW1lfWBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBhZGRWZW50YXNQcm94eTogYXN5bmMgKHVzZXJDaGFuZ2VpZCwgdXNlcklkKSA9PiB7XHJcbiAgICAgIGxldCB1c2VyQ2hhbmdlID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUodXNlckNoYW5nZWlkKVxyXG4gICAgICBsZXQgdXNlciA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJJZClcclxuICAgICAgLy8gbGV0IHByZWNpbyA9IFByZWNpb3NDb2xsZWN0aW9uLmZpbmRPbmUocHJlY2lvaWQpXHJcbiAgICAgIGxldCBwcmVjaW87XHJcblxyXG4gICAgICBhd2FpdCB1c2VyQ2hhbmdlLmlzSWxpbWl0YWRvXHJcbiAgICAgICAgPyBwcmVjaW8gPSBhd2FpdCBQcmVjaW9zQ29sbGVjdGlvbi5maW5kT25lKHsgdXNlcklkOiB1c2VySWQsIHR5cGU6IFwiZmVjaGEtcHJveHlcIiB9KVxyXG4gICAgICAgIDogcHJlY2lvID0gYXdhaXQgUHJlY2lvc0NvbGxlY3Rpb24uZmluZE9uZSh7IHVzZXJJZDogdXNlcklkLCB0eXBlOiBcIm1lZ2FzXCIsIG1lZ2FzOiB1c2VyQ2hhbmdlLm1lZ2FzIH0pXHJcblxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXVzZXJDaGFuZ2UuYmFuZWFkbykge1xyXG4gICAgICAgICAgYXdhaXQgTWV0ZW9yLmNhbGwoXCJkZXNhYmlsaXRhclByb3h5VXNlclwiLCB1c2VyQ2hhbmdlaWQsIHVzZXJJZClcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmVjaW8gfHwgQXJyYXkoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5hZG1pbmlzdHJhZG9yZXMpWzBdLmluY2x1ZGVzKHVzZXIudXNlcm5hbWUpKSB7XHJcbiAgICAgICAgICBhd2FpdCBNZXRlb3IuY2FsbChcImhhYmlsaXRhclByb3h5VXNlclwiLCB1c2VyQ2hhbmdlaWQsIHVzZXJJZClcclxuICAgICAgICAgIHByZWNpbyAmJiBhd2FpdCBNZXRlb3IuY2FsbChcImFkZFZlbnRhc09ubHlcIiwgdXNlckNoYW5nZWlkLCB1c2VySWQsIHByZWNpbylcclxuXHJcbiAgICAgICAgICAvLyAgIGF3YWl0IFZlbnRhc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgIC8vICAgYWRtaW5JZDogdXNlcklkLFxyXG4gICAgICAgICAgLy8gICB1c2VySWQ6IHVzZXJDaGFuZ2VpZCxcclxuICAgICAgICAgIC8vICAgcHJlY2lvOiAocHJlY2lvLnByZWNpbyAtIHVzZXIuZGVzY3VlbnRvcHJveHkgPiAwKSA/IChwcmVjaW8ucHJlY2lvIC0gdXNlci5kZXNjdWVudG9wcm94eSkgOiAwLFxyXG4gICAgICAgICAgLy8gICBjb21lbnRhcmlvOiBwcmVjaW8uY29tZW50YXJpb1xyXG4gICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJlY2lvID8gcHJlY2lvLmNvbWVudGFyaW8gOiBgTm8gc2UgZW5jb250cm8gUHJlY2lvIGEgbGEgb2ZlcnRhIGRlIFByb3h5IGRlbCB1c3VhcmlvOiAke3VzZXJDaGFuZ2UudXNlcm5hbWV9YFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGRlc2FiaWxpdGFyUHJveHlVc2VyOiBhc3luYyAodXNlckNoYW5nZWlkLCB1c2VySWQpID0+IHtcclxuXHJcbiAgICAgIGxldCB1c2VyQ2hhbmdlID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUodXNlckNoYW5nZWlkKVxyXG4gICAgICBsZXQgdXNlciA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJJZClcclxuXHJcbiAgICAgIGxldCBiYW5lYWRvID0gdXNlckNoYW5nZS5iYW5lYWRvXHJcblxyXG4gICAgICAhYmFuZWFkbyYmXHJcbiAgICAgIGF3YWl0IE1ldGVvci51c2Vycy51cGRhdGUodXNlckNoYW5nZWlkLCB7XHJcbiAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgYmFuZWFkbzogdHJ1ZSxcclxuICAgICAgICAgIGJsb3F1ZWFkb0Rlc2Jsb3F1ZWFkb1BvcjogdXNlcklkXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgICFiYW5lYWRvJiZcclxuICAgICAgYXdhaXQgTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICB0eXBlOiBcIlByb3h5XCIsXHJcbiAgICAgICAgdXNlckFmZWN0YWRvOiB1c2VyQ2hhbmdlaWQsXHJcbiAgICAgICAgdXNlckFkbWluOiB1c2VySWQsXHJcbiAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgIFwiSGEgc2lkbyBEZXNhY3RpdmFkbyBlbCBwcm94eSBwb3IgdW4gQWRtaW5cIlxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgLy8gTWV0ZW9yLmNhbGwoJ3NlbmRlbWFpbCcsIHVzZXJDaGFuZ2UsIHtcclxuICAgICAgLy8gICB0ZXh0OiBcIkhhIHNpZG8gXCIgK1xyXG4gICAgICAvLyAgICAgKCF1c2VyQ2hhbmdlLmJhbmVhZG8gPyBcIkRlc2FjdGl2YWRvXCIgOiBcIkFjdGl2YWRvXCIpICtcclxuICAgICAgLy8gICAgIGAgZWwgcHJveHkgZGVsIHVzdWFyaW8gJHt1c2VyQ2hhbmdlLnVzZXJuYW1lfWBcclxuICAgICAgLy8gfSxcclxuICAgICAgLy8gICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkbyBcIiArIHVzZXIudXNlcm5hbWUgOiBcIkFjdGl2YWRvIFwiICsgdXNlci51c2VybmFtZSkpLFxyXG5cclxuICAgICAgIWJhbmVhZG8mJlxyXG4gICAgICBhd2FpdCBNZXRlb3IuY2FsbCgnc2VuZE1lbnNhamUnLCB1c2VyQ2hhbmdlLCB7XHJcbiAgICAgICAgdGV4dDogXCJIYSBzaWRvIERlc2FjdGl2YWRvIGVsIHByb3h5XCJcclxuICAgICAgfSwgKFwiRGVzYWN0aXZhZG8gXCIgKyB1c2VyLnVzZXJuYW1lKSlcclxuXHJcbiAgICB9LFxyXG4gICAgaGFiaWxpdGFyUHJveHlVc2VyOiBhc3luYyAodXNlckNoYW5nZWlkLCB1c2VySWQpID0+IHtcclxuXHJcbiAgICAgIGxldCB1c2VyQ2hhbmdlID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUodXNlckNoYW5nZWlkKVxyXG4gICAgICBsZXQgdXNlciA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJJZClcclxuICAgICAgY29uc29sZS5sb2codXNlckNoYW5nZSk7XHJcbiAgICAgIGxldCBiYW5lYWRvID0gdXNlckNoYW5nZS5iYW5lYWRvXHJcbiAgICAgIGJhbmVhZG8gJiZcclxuICAgICAgYXdhaXQgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh1c2VyQ2hhbmdlaWQsIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICBiYW5lYWRvOiBmYWxzZSxcclxuICAgICAgICAgIGJsb3F1ZWFkb0Rlc2Jsb3F1ZWFkb1BvcjogdXNlcklkXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGJhbmVhZG8gJiZcclxuICAgICAgYXdhaXQgTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICB0eXBlOiBcIlByb3h5XCIsXHJcbiAgICAgICAgdXNlckFmZWN0YWRvOiB1c2VyQ2hhbmdlaWQsXHJcbiAgICAgICAgdXNlckFkbWluOiB1c2VySWQsXHJcbiAgICAgICAgbWVzc2FnZTogXCJIYSBzaWRvIEFjdGl2YWRvIGVsIHByb3h5IHBvciB1biBBZG1pblwiXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIE1ldGVvci5jYWxsKCdzZW5kZW1haWwnLCB1c2VyQ2hhbmdlLCB7XHJcbiAgICAgIC8vICAgdGV4dDogXCJIYSBzaWRvIFwiICtcclxuICAgICAgLy8gICAgICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkb1wiIDogXCJBY3RpdmFkb1wiKSArXHJcbiAgICAgIC8vICAgICBgIGVsIHByb3h5IGRlbCB1c3VhcmlvICR7dXNlckNoYW5nZS51c2VybmFtZX1gXHJcbiAgICAgIC8vIH0sICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkbyBcIiArIHVzZXIudXNlcm5hbWUgOiBcIkFjdGl2YWRvIFwiICsgdXNlci51c2VybmFtZSkpLFxyXG5cclxuICAgICAgYmFuZWFkbyAmJlxyXG4gICAgICBhd2FpdCBNZXRlb3IuY2FsbCgnc2VuZE1lbnNhamUnLCB1c2VyQ2hhbmdlLCB7XHJcbiAgICAgICAgdGV4dDogXCJIYSBzaWRvIFwiICtcclxuICAgICAgICAgICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkb1wiIDogXCJBY3RpdmFkb1wiKSArXHJcbiAgICAgICAgICBgIGVsIHByb3h5YFxyXG4gICAgICB9LCAoIXVzZXJDaGFuZ2UuYmFuZWFkbyA/IFwiRGVzYWN0aXZhZG8gXCIgKyB1c2VyLnVzZXJuYW1lIDogXCJBY3RpdmFkbyBcIiArIHVzZXIudXNlcm5hbWUpKVxyXG5cclxuICAgIH0sXHJcbiAgICBoYWJpbGl0YXJQcm94eVVzZXJpblZlbnRhczogYXN5bmMgKHVzZXJVc2VybmFtZSwgYWRtaW51c2VybmFtZSkgPT4ge1xyXG5cclxuICAgICAgbGV0IHVzZXJDaGFuZ2UgPSBhd2FpdCBNZXRlb3IudXNlcnMuZmluZE9uZSh7IHVzZXJuYW1lOiB1c2VyVXNlcm5hbWUgfSlcclxuICAgICAgbGV0IGFkbWluID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUoe3VzZXJuYW1lOmFkbWludXNlcm5hbWV9KVxyXG4gICAgICBsZXQgYmFuZWFkbyA9IHVzZXJDaGFuZ2UuYmFuZWFkb1xyXG4gICAgICBiYW5lYWRvICYmXHJcbiAgICAgIGF3YWl0IE1ldGVvci51c2Vycy51cGRhdGUodXNlckNoYW5nZS5faWQsIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICBiYW5lYWRvOiBmYWxzZSxcclxuICAgICAgICAgIGJsb3F1ZWFkb0Rlc2Jsb3F1ZWFkb1BvcjogYWRtaW4uX2lkXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGJhbmVhZG8gJiZcclxuICAgICAgYXdhaXQgTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICB0eXBlOiBcIlByb3h5XCIsXHJcbiAgICAgICAgdXNlckFmZWN0YWRvOiB1c2VyQ2hhbmdlLl9pZCxcclxuICAgICAgICB1c2VyQWRtaW46IGFkbWluLl9pZCxcclxuICAgICAgICBtZXNzYWdlOiBcIkhhIHNpZG8gQWN0aXZhZG8gZWwgcHJveHkgcG9yIHVuIEFkbWluXCJcclxuICAgICAgfSlcclxuICAgICAgLy8gTWV0ZW9yLmNhbGwoJ3NlbmRlbWFpbCcsIHVzZXJDaGFuZ2UsIHtcclxuICAgICAgLy8gICB0ZXh0OiBcIkhhIHNpZG8gXCIgK1xyXG4gICAgICAvLyAgICAgKCF1c2VyQ2hhbmdlLmJhbmVhZG8gPyBcIkRlc2FjdGl2YWRvXCIgOiBcIkFjdGl2YWRvXCIpICtcclxuICAgICAgLy8gICAgIGAgZWwgcHJveHkgZGVsIHVzdWFyaW8gJHt1c2VyQ2hhbmdlLnVzZXJuYW1lfWBcclxuICAgICAgLy8gfSwgKCF1c2VyQ2hhbmdlLmJhbmVhZG8gPyBcIkRlc2FjdGl2YWRvIFwiICsgdXNlci51c2VybmFtZSA6IFwiQWN0aXZhZG8gXCIgKyB1c2VyLnVzZXJuYW1lKSksXHJcblxyXG4gICAgICBiYW5lYWRvICYmXHJcbiAgICAgIGF3YWl0IE1ldGVvci5jYWxsKCdzZW5kTWVuc2FqZScsIHVzZXJDaGFuZ2UsIHtcclxuICAgICAgICB0ZXh0OiBcIkhhIHNpZG8gXCIgK1xyXG4gICAgICAgICAgKCF1c2VyQ2hhbmdlLmJhbmVhZG8gPyBcIkRlc2FjdGl2YWRvXCIgOiBcIkFjdGl2YWRvXCIpICtcclxuICAgICAgICAgIGAgZWwgcHJveHlgXHJcbiAgICAgIH0sICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkbyBcIiArIGFkbWluLnVzZXJuYW1lIDogXCJBY3RpdmFkbyBcIiArIGFkbWluLnVzZXJuYW1lKSlcclxuXHJcbiAgICB9LFxyXG4gICAgZGVzYWJpbGl0YXJQcm94eVVzZXJpblZlbnRhczogYXN5bmMgKHVzZXJVc2VybmFtZSwgYWRtaW51c2VybmFtZSkgPT4ge1xyXG5cclxuICAgICAgbGV0IHVzZXJDaGFuZ2UgPSBhd2FpdCBNZXRlb3IudXNlcnMuZmluZE9uZSh7IHVzZXJuYW1lOiB1c2VyVXNlcm5hbWUgfSlcclxuICAgICAgbGV0IGFkbWluID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmRPbmUoe3VzZXJuYW1lOmFkbWludXNlcm5hbWV9KVxyXG4gICAgICBsZXQgYmFuZWFkbyA9IHVzZXJDaGFuZ2UuYmFuZWFkb1xyXG4gICAgICAhYmFuZWFkbyAmJlxyXG4gICAgICBhd2FpdCBNZXRlb3IudXNlcnMudXBkYXRlKHVzZXJDaGFuZ2UuX2lkLCB7XHJcbiAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgYmFuZWFkbzogdHJ1ZSxcclxuICAgICAgICAgIGJsb3F1ZWFkb0Rlc2Jsb3F1ZWFkb1BvcjogYWRtaW4uX2lkXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgICFiYW5lYWRvICYmXHJcbiAgICAgIGF3YWl0IExvZ3NDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgdHlwZTogXCJQcm94eVwiLFxyXG4gICAgICAgIHVzZXJBZmVjdGFkbzogdXNlckNoYW5nZS5faWQsXHJcbiAgICAgICAgdXNlckFkbWluOiBhZG1pbi5faWQsXHJcbiAgICAgICAgbWVzc2FnZTogXCJIYSBzaWRvIERlc2FjdGl2YWRvIGVsIHByb3h5IHBvciB1biBBZG1pblwiXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIE1ldGVvci5jYWxsKCdzZW5kZW1haWwnLCB1c2VyQ2hhbmdlLCB7XHJcbiAgICAgIC8vICAgdGV4dDogXCJIYSBzaWRvIFwiICtcclxuICAgICAgLy8gICAgICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkb1wiIDogXCJBY3RpdmFkb1wiKSArXHJcbiAgICAgIC8vICAgICBgIGVsIHByb3h5IGRlbCB1c3VhcmlvICR7dXNlckNoYW5nZS51c2VybmFtZX1gXHJcbiAgICAgIC8vIH0sICghdXNlckNoYW5nZS5iYW5lYWRvID8gXCJEZXNhY3RpdmFkbyBcIiArIHVzZXIudXNlcm5hbWUgOiBcIkFjdGl2YWRvIFwiICsgdXNlci51c2VybmFtZSkpLFxyXG5cclxuICAgICAgIWJhbmVhZG8gJiZcclxuICAgICAgYXdhaXQgTWV0ZW9yLmNhbGwoJ3NlbmRNZW5zYWplJywgdXNlckNoYW5nZSwge1xyXG4gICAgICAgIHRleHQ6IFwiSGEgc2lkbyBcIiArXHJcbiAgICAgICAgICAoIXVzZXJDaGFuZ2UuYmFuZWFkbyA/IFwiRGVzYWN0aXZhZG9cIiA6IFwiQWN0aXZhZG9cIikgK1xyXG4gICAgICAgICAgYCBlbCBwcm94eWBcclxuICAgICAgfSwgKCF1c2VyQ2hhbmdlLmJhbmVhZG8gPyBcIkRlc2FjdGl2YWRvIFwiICsgYWRtaW4udXNlcm5hbWUgOiBcIkFjdGl2YWRvIFwiICsgYWRtaW4udXNlcm5hbWUpKVxyXG5cclxuICAgIH0sXHJcbiAgICBhZGRWZW50YXNWUE46IGFzeW5jICh1c2VyQ2hhbmdlaWQsIHVzZXJJZCkgPT4ge1xyXG4gICAgICBsZXQgdXNlckNoYW5nZSA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJDaGFuZ2VpZClcclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBNZXRlb3IudXNlcnMuZmluZE9uZSh1c2VySWQpXHJcbiAgICAgIC8vIGxldCBwcmVjaW8gPSBQcmVjaW9zQ29sbGVjdGlvbi5maW5kT25lKHByZWNpb2lkKVxyXG4gICAgICBsZXQgcHJlY2lvO1xyXG5cclxuICAgICAgYXdhaXQgdXNlckNoYW5nZS52cG5pc0lsaW1pdGFkb1xyXG4gICAgICAgID8gcHJlY2lvID0gYXdhaXQgUHJlY2lvc0NvbGxlY3Rpb24uZmluZE9uZSh7IHVzZXJJZDogdXNlcklkLCB0eXBlOiBcImZlY2hhLXZwblwiIH0pXHJcbiAgICAgICAgOiAodXNlckNoYW5nZS52cG5wbHVzXHJcbiAgICAgICAgICA/IHByZWNpbyA9IGF3YWl0IFByZWNpb3NDb2xsZWN0aW9uLmZpbmRPbmUoeyB1c2VySWQ6IHVzZXJJZCwgdHlwZTogXCJ2cG5wbHVzXCIsIG1lZ2FzOiB1c2VyQ2hhbmdlLnZwbm1lZ2FzIH0pXHJcbiAgICAgICAgICA6IHByZWNpbyA9IGF3YWl0IFByZWNpb3NDb2xsZWN0aW9uLmZpbmRPbmUoeyB1c2VySWQ6IHVzZXJJZCwgdHlwZTogXCJ2cG4ybWJcIiwgbWVnYXM6IHVzZXJDaGFuZ2UudnBubWVnYXMgfSlcclxuICAgICAgICApXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh1c2VyQ2hhbmdlLnZwbikge1xyXG4gICAgICAgICAgYXdhaXQgTWV0ZW9yLmNhbGwoXCJkZXNhYmlsaXRhclZQTlVzZXJcIiwgdXNlckNoYW5nZWlkLCB1c2VySWQpXHJcbiAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJlY2lvIHx8IEFycmF5KE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuYWRtaW5pc3RyYWRvcmVzKVswXS5pbmNsdWRlcyh1c2VyLnVzZXJuYW1lKSkge1xyXG4gICAgICAgICAgYXdhaXQgTWV0ZW9yLmNhbGwoXCJoYWJpbGl0YXJWUE5Vc2VyXCIsIHVzZXJDaGFuZ2VpZCwgdXNlcklkKVxyXG5cclxuICAgICAgICAgIHByZWNpbyAmJiBhd2FpdCBNZXRlb3IuY2FsbChcImFkZFZlbnRhc09ubHlcIiwgdXNlckNoYW5nZWlkLCB1c2VySWQsIHByZWNpbylcclxuICAgICAgICAgIC8vIFZlbnRhc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgIC8vICAgYWRtaW5JZDogdXNlcklkLFxyXG4gICAgICAgICAgLy8gICB1c2VySWQ6IHVzZXJDaGFuZ2VpZCxcclxuICAgICAgICAgIC8vICAgcHJlY2lvOiAocHJlY2lvLnByZWNpbyAtIHVzZXIuZGVzY3VlbnRvdnBuID4gMCkgPyAocHJlY2lvLnByZWNpbyAtIHVzZXIuZGVzY3VlbnRvdnBuKSA6IDAsXHJcbiAgICAgICAgICAvLyAgIGNvbWVudGFyaW86IHByZWNpby5jb21lbnRhcmlvXHJcbiAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmVjaW8gPyBwcmVjaW8uY29tZW50YXJpbyA6IGBObyBzZSBlbmNvbnRybyBQcmVjaW8gYSBsYSBvZmVydGEgZGUgVlBOIGRlbCB1c3VhcmlvOiAke3VzZXJDaGFuZ2UudXNlcm5hbWV9YFxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGRlc2FiaWxpdGFyVlBOVXNlcjogYXN5bmMgKHVzZXJDaGFuZ2VpZCwgdXNlcklkKSA9PiB7XHJcblxyXG4gICAgICBsZXQgdXNlckNoYW5nZSA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJDaGFuZ2VpZClcclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBNZXRlb3IudXNlcnMuZmluZE9uZSh1c2VySWQpXHJcblxyXG5cclxuICAgICAgYXdhaXQgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh1c2VyQ2hhbmdlaWQsIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICB2cG46IGZhbHNlLFxyXG4gICAgICAgICAgYmxvcXVlYWRvRGVzYmxvcXVlYWRvUG9yOiB1c2VySWRcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICBMb2dzQ29sbGVjdGlvbi5pbnNlcnQoe1xyXG4gICAgICAgIHR5cGU6ICdWUE4nLFxyXG4gICAgICAgIHVzZXJBZmVjdGFkbzogdXNlckNoYW5nZWlkLFxyXG4gICAgICAgIHVzZXJBZG1pbjogdXNlcklkLFxyXG4gICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICBgU2UgRGVzYWN0aXbDsyBsYSBWUE5gXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBNZXRlb3IuY2FsbCgnc2VuZGVtYWlsJywgdXNlckNoYW5nZSwge1xyXG4gICAgICAvLyAgIHRleHQ6IFwiSGEgc2lkbyBcIiArXHJcbiAgICAgIC8vICAgICAoIXVzZXJDaGFuZ2UuYmFuZWFkbyA/IFwiRGVzYWN0aXZhZG9cIiA6IFwiQWN0aXZhZG9cIikgK1xyXG4gICAgICAvLyAgICAgYCBlbCBwcm94eSBkZWwgdXN1YXJpbyAke3VzZXJDaGFuZ2UudXNlcm5hbWV9YFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyAgKCF1c2VyQ2hhbmdlLmJhbmVhZG8gPyBcIkRlc2FjdGl2YWRvIFwiICsgdXNlci51c2VybmFtZSA6IFwiQWN0aXZhZG8gXCIgKyB1c2VyLnVzZXJuYW1lKSksXHJcbiAgICAgIGF3YWl0IE1ldGVvci5jYWxsKCdzZW5kTWVuc2FqZScsIHVzZXJDaGFuZ2UsIHtcclxuICAgICAgICB0ZXh0OiBcIkhhIHNpZG8gRGVzYWN0aXZhZG8gZWwgcHJveHlcIlxyXG4gICAgICB9LCAoXCJEZXNhY3RpdmFkbyBcIiArIHVzZXIudXNlcm5hbWUpKVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaGFiaWxpdGFyVlBOVXNlcjogYXN5bmMgKHVzZXJDaGFuZ2VpZCwgdXNlcklkKSA9PiB7XHJcblxyXG4gICAgICBsZXQgdXNlckNoYW5nZSA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHVzZXJDaGFuZ2VpZClcclxuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBNZXRlb3IudXNlcnMuZmluZE9uZSh1c2VySWQpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICBpZiAodXNlckNoYW5nZS52cG4gfHwgdXNlckNoYW5nZS52cG5wbHVzIHx8IHVzZXJDaGFuZ2UudnBuMm1iKSB7XHJcblxyXG5cclxuICAgICAgICBsZXQgbmV4dElwID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoe30sIHsgc29ydDogeyB2cG5pcDogLTEgfSB9KSA/IE1ldGVvci51c2Vycy5maW5kT25lKHt9LCB7IHNvcnQ6IHsgdnBuaXA6IC0xIH0gfSkudnBuaXAgOiAxXHJcblxyXG4gICAgICAgICF1c2VyQ2hhbmdlLnZwbmlwICYmXHJcbiAgICAgICAgICBNZXRlb3IudXNlcnMudXBkYXRlKHVzZXJDaGFuZ2VpZCwge1xyXG4gICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgdnBuaXA6IG5leHRJcCArIDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZSh1c2VyQ2hhbmdlaWQsIHtcclxuICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgdnBuOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIExvZ3NDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgICB0eXBlOiAnVlBOJyxcclxuICAgICAgICAgIHVzZXJBZmVjdGFkbzogdXNlckNoYW5nZWlkLFxyXG4gICAgICAgICAgdXNlckFkbWluOiB1c2VySWQsXHJcbiAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICBgU2UgQWN0aXZvIGxhIFZQTmBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBNZXRlb3IuY2FsbCgnc2VuZGVtYWlsJywgdXNlcnMsIHsgdGV4dDogYFNlICR7IXVzZXJzLnZwbiA/IFwiQWN0aXZvXCIgOiBcIkRlc2FjdGl2w7NcIn0gbGEgVlBOIHBhcmEgZWwgdXN1YXJpbzogJHt1c2Vycy51c2VybmFtZX0ke3VzZXJzLmRlc2N1ZW50b3ZwbiA/IGAgQ29uIHVuIGRlc2N1ZW50byBkZTogJHt1c2Vycy5kZXNjdWVudG92cG59Q1VQYCA6IFwiXCJ9YCB9LCBgVlBOICR7dXNlci51c2VybmFtZX1gKVxyXG4gICAgICAgIE1ldGVvci5jYWxsKCdzZW5kTWVuc2FqZScsIHVzZXJDaGFuZ2UsIHsgdGV4dDogYFNlICR7IXVzZXJDaGFuZ2UudnBuID8gXCJBY3Rpdm9cIiA6IFwiRGVzYWN0aXbDs1wifSBsYSBWUE5gIH0sIGBWUE4gJHt1c2VyLnVzZXJuYW1lfWApXHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNldE1lbnNhamUoXCJJTkZPISEhXFxuUHJpbWVyYW1lbnRlIGRlYmUgc2VsZWNjaW9uYXIgdW5hIG9mZXJ0YSBkZSBWUE4hISFcIiksXHJcbiAgICAgICAgICBoYW5kbGVDbGlja09wZW4oKVxyXG4gICAgICAgIC8vIGFsZXJ0KFwiSU5GTyEhIVxcblByaW1lcmFtZW50ZSBkZWJlIHNlbGVjY2lvbmFyIHVuYSBvZmVydGEgZGUgVlBOISEhXCIpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCBzZXRDb25zdW1vUHJveHk6IGFzeW5jICh1c2VyLCBzdGF0dXMpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgY291bnQgPSBhd2FpdCBNZXRlb3IudXNlcnMudXBkYXRlKFxyXG4gICAgICAgICAgdXNlciA/IHVzZXIgOiB7fSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJHNldDogeyBjb250YW5kb1Byb3h5OiBzdGF0dXMgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG11bHRpOiB0cnVlIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBgU2UgYWN0dWFsaXphcm9uICR7Y291bnR9IHVzdWFyaW9zYFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH0sIGdldFVybFRyaWxsZXI6IChpZCkgPT4ge1xyXG4gICAgICBsZXQgcGVsaSA9IFBlbGlzQ29sbGVjdGlvbi5maW5kT25lKGlkKVxyXG4gICAgICByZXR1cm4gcGVsaS51cmxUcmFpbGVyID8gcGVsaS51cmxUcmFpbGVyIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHtcclxuICAgIE9ubGluZUNvbGxlY3Rpb24sXHJcbiAgICBQZWxpc0NvbGxlY3Rpb24sXHJcbiAgICBNZW5zYWplc0NvbGxlY3Rpb24sXHJcbiAgICBTZXJ2ZXJzQ29sbGVjdGlvbixcclxuICAgIFByZWNpb3NDb2xsZWN0aW9uLFxyXG4gICAgVmVudGFzQ29sbGVjdGlvbixcclxuICAgIEZpbGVzQ29sbGVjdGlvbixcclxuICAgIFZlcnNpb25zQ29sbGVjdGlvbixcclxuICAgIExvZ3NDb2xsZWN0aW9uLFxyXG4gICAgRGVzY2FyZ2FzQ29sbGVjdGlvbixcclxuICAgIFRWQ29sbGVjdGlvbixcclxuICAgIFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvblxyXG4gIH0gZnJvbSBcIi4uL2ltcG9ydHMvdWkvcGFnZXMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnNcIjtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2FyZ2FuZG8gUHVibGljYWNpb25lcy4uLlwiKTtcclxuXHJcblxyXG4gICAgTWV0ZW9yLnB1Ymxpc2goXCJsb2dzXCIsIGZ1bmN0aW9uIChzZWxlY3RvcixvcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gTG9nc0NvbGxlY3Rpb24uZmluZChzZWxlY3Rvcj9zZWxlY3Rvcjp7fSxvcHRpb24/b3B0aW9uOnt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwibG9nc0lkXCIsIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiBMb2dzQ29sbGVjdGlvbi5maW5kKHsgdXNlckFmZWN0YWRvOiBpZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwicmVnaXN0ZXJEYXRhVXNlclwiLCBmdW5jdGlvbiAoc2VsZWN0b3Isb3B0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbi5maW5kKHNlbGVjdG9yP3NlbGVjdG9yOnt9LG9wdGlvbj9vcHRpb246e30pO1xyXG4gICAgICB9KTtcclxuICAgICAgTWV0ZW9yLnB1Ymxpc2goXCJyZWdpc3RlckRhdGFVc2VySWRcIiwgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbi5maW5kKHsgdXNlcklkOiBpZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwicGVsaXNcIiwgZnVuY3Rpb24gKHNlbGVjdG9yLG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiBQZWxpc0NvbGxlY3Rpb24uZmluZChzZWxlY3Rvcj9zZWxlY3Rvcjp7fSxvcHRpb24/b3B0aW9uOnt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwicGVsaVwiLCBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gUGVsaXNDb2xsZWN0aW9uLmZpbmQoeyBfaWQ6IGlkIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgTWV0ZW9yLnB1Ymxpc2goXCJ0dnNcIiwgZnVuY3Rpb24gKHNlbGVjdG9yLG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiBUVkNvbGxlY3Rpb24uZmluZChzZWxlY3Rvcj9zZWxlY3Rvcjp7fSxvcHRpb24/b3B0aW9uOnt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwidHZcIiwgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIFRWQ29sbGVjdGlvbi5maW5kKHsgX2lkOiBpZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwiZGVzY2FyZ2FzXCIsIGZ1bmN0aW9uIChzZWxlY3RvcixvcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gRGVzY2FyZ2FzQ29sbGVjdGlvbi5maW5kKHNlbGVjdG9yP3NlbGVjdG9yOnt9LG9wdGlvbj9vcHRpb246e30pO1xyXG4gICAgICB9KTtcclxuICAgICAgTWV0ZW9yLnB1Ymxpc2goXCJkZXNjYXJnYVwiLCBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gRGVzY2FyZ2FzQ29sbGVjdGlvbi5maW5kKHsgX2lkOiBpZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwidXNlclwiLCBmdW5jdGlvbiAoc2VsZWN0b3Isb3B0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHNlbGVjdG9yP3NlbGVjdG9yOnt9LG9wdGlvbj9vcHRpb246e30pO1xyXG4gICAgICB9KTtcclxuICAgICAgTWV0ZW9yLnB1Ymxpc2goXCJ1c2VySURcIiwgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIE1ldGVvci51c2Vycy5maW5kKHsgX2lkOiBpZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwidXNlclJvbGVcIiwgZnVuY3Rpb24gKHJvbGUpIHtcclxuICAgICAgICByZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoeyBcInByb2ZpbGUucm9sZVwiOiByb2xlIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgTWV0ZW9yLnB1Ymxpc2goXCJjb25leGlvbmVzVXNlclwiLCBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gT25saW5lQ29sbGVjdGlvbi5maW5kKHsgdXNlcklkOiBpZCB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwiY29uZXhpb25lc1wiLCBmdW5jdGlvbiAoc2VsZWN0b3Isb3B0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ubGluZUNvbGxlY3Rpb24uZmluZChzZWxlY3Rvcj9zZWxlY3Rvcjp7fSxvcHRpb24/b3B0aW9uOnt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwibWVuc2FqZXNcIiwgZnVuY3Rpb24gKHNlbGVjdG9yLG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiBNZW5zYWplc0NvbGxlY3Rpb24uZmluZChzZWxlY3Rvcj9zZWxlY3Rvcjp7fSxvcHRpb24/b3B0aW9uOnt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwic2VydmVyXCIsIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiBTZXJ2ZXJzQ29sbGVjdGlvbi5maW5kKGlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIE1ldGVvci5wdWJsaXNoKFwic2VydmVyc1wiLCBmdW5jdGlvbiAoc2VsZWN0b3Isb3B0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFNlcnZlcnNDb2xsZWN0aW9uLmZpbmQoc2VsZWN0b3I/c2VsZWN0b3I6e30sb3B0aW9uP29wdGlvbjp7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBNZXRlb3IucHVibGlzaChcInByZWNpb3NcIiwgZnVuY3Rpb24gKHNlbGVjdG9yLG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiBQcmVjaW9zQ29sbGVjdGlvbi5maW5kKHNlbGVjdG9yP3NlbGVjdG9yOnt9LG9wdGlvbj9vcHRpb246e30pO1xyXG4gICAgICB9KTtcclxuICAgICAgTWV0ZW9yLnB1Ymxpc2goXCJ2ZW50YXNcIiwgZnVuY3Rpb24gKHNlbGVjdG9yLG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiBWZW50YXNDb2xsZWN0aW9uLmZpbmQoc2VsZWN0b3I/c2VsZWN0b3I6e30sb3B0aW9uP29wdGlvbjp7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBNZXRlb3IucHVibGlzaChcImZpbGVzXCIsIGZ1bmN0aW9uIChzZWxlY3RvcixvcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gRmlsZXNDb2xsZWN0aW9uLmZpbmQoc2VsZWN0b3I/c2VsZWN0b3I6e30sb3B0aW9uP29wdGlvbjp7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBNZXRlb3IucHVibGlzaChcInZlcnNpb25zXCIsIGZ1bmN0aW9uIChzZWxlY3RvcixvcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gVmVyc2lvbnNDb2xsZWN0aW9uLmZpbmQoc2VsZWN0b3I/c2VsZWN0b3I6e30sb3B0aW9uP29wdGlvbjp7fSk7XHJcbiAgICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgQWNjb3VudHMgfSBmcm9tICdtZXRlb3IvYWNjb3VudHMtYmFzZSdcclxuXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xyXG5pbXBvcnQgeyBXZWJBcHAgfSBmcm9tIFwibWV0ZW9yL3dlYmFwcFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJyb3V0ZXJcIjtcclxuY29uc3QgZW5kcG9pbnQgPSByb3V0ZXIoKTtcclxuXHJcbi8vIGltcG9ydCB5b3V0dWJlRG93bmxvYWQgZnJvbSBcIi4vZG93bmxvYWRlclwiO1xyXG5cclxudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuaHR0cC5wb3N0ID0gcmVxdWlyZShcImh0dHAtcG9zdFwiKTtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBPbmxpbmVDb2xsZWN0aW9uLFxyXG4gICAgUGVsaXNDb2xsZWN0aW9uLFxyXG4gICAgTWVuc2FqZXNDb2xsZWN0aW9uLFxyXG4gICAgU2VydmVyc0NvbGxlY3Rpb24sXHJcbiAgICBQcmVjaW9zQ29sbGVjdGlvbixcclxuICAgIFZlbnRhc0NvbGxlY3Rpb24sXHJcbiAgICBGaWxlc0NvbGxlY3Rpb24sXHJcbiAgICBWZXJzaW9uc0NvbGxlY3Rpb24sXHJcbiAgICBMb2dzQ29sbGVjdGlvbixcclxuICAgIERlc2Nhcmdhc0NvbGxlY3Rpb24sXHJcbiAgICBUVkNvbGxlY3Rpb24sXHJcbiAgICBSZWdpc3RlckRhdGFVc2Vyc0NvbGxlY3Rpb25cclxuICB9IGZyb20gXCIuLi9pbXBvcnRzL3VpL3BhZ2VzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zXCI7XHJcblxyXG4gIFxyXG5jb25zdCBnb3QgPSByZXF1aXJlKCdnb3QnKVxyXG5jb25zdCBodG1sVXJscyA9IHJlcXVpcmUoJ2h0bWwtdXJscycpXHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDYXJnYW5kbyBSdXRhcy4uLlwiKTtcclxuICAgIHZhciBjb250ZW9Qb3N0ID0gMDtcclxuICAgIGZ1bmN0aW9uIHN0cmVhbVRvU3RyaW5nKHN0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHN0cmVhbS5vbignZGF0YScsIChjaHVuaykgPT4gY2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKSk7XHJcbiAgICAgICAgICAgIHN0cmVhbS5vbignZXJyb3InLCAoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4gcmVzb2x2ZShCdWZmZXIuY29uY2F0KGNodW5rcykudG9TdHJpbmcoJ3V0ZjgnKSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGVsaShub21icmUsIHllYXIsIHVybCkge1xyXG4gICAgICAgIGxldCBwZWxpID0gJydcclxuICAgICAgICBsZXQgc3VidGl0bGUgPSAnJ1xyXG4gICAgICAgIGxldCBwb3N0ZXIgPSAnJ1xyXG4gICAgICAgIGlmICghdXJsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTmVlZCB0byBwcm92aWRlIGFuIHVybCBhcyBmaXJzdCBhcmd1bWVudC5cIik7XHJcbiAgICAgICAgY29uc3QgeyBib2R5OiBodG1sIH0gPSBhd2FpdCBnb3QodXJsKTtcclxuICAgICAgICBjb25zdCBsaW5rc1BlbGkgPSBodG1sVXJscyh7IGh0bWwsIHVybCB9KTtcclxuXHJcbiAgICAgICAgLy8gZm9yICh2YXIgaiA9IDU7IGogPCBsaW5rc1BlbGkubGVuZ3RoLTY7IGorKykge1xyXG4gICAgICAgIC8vICAgLy8gY29uc29sZS5sb2coYExpbmtzIGRlIHBlbGljdWxhcyAke0pTT04uc3RyaW5naWZ5KGxpbmtzUGVsaVtqXSl9YCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHZhciBmaWx0ZXIgPSByZXF1aXJlKCdzaW1wbGUtdGV4dC1zZWFyY2gnKVxyXG4gICAgICAgIHZhciBnZXQgPSBmaWx0ZXIobGlua3NQZWxpLCAndXJsJylcclxuICAgICAgICB2YXIgcGVsaXVybCA9IGdldCgnLm1rdicpID8gZ2V0KCcubWt2JykgOiBnZXQoJy5tcDQnKVxyXG4gICAgICAgIHZhciBzdWJ0aXRsZXVybCA9IGdldCgnLnNydCcpXHJcbiAgICAgICAgdmFyIHBvc3RlcnVybCA9IGdldCgnLmpwZycpID8gZ2V0KCcuanBnJykgOiBnZXQoJy5wbmcnKVxyXG5cclxuICAgICAgICBwZWxpID0gcGVsaXVybFswXSAmJiBwZWxpdXJsWzBdLnVybDtcclxuICAgICAgICBzdWJ0aXRsZSA9IHN1YnRpdGxldXJsWzBdICYmIHN1YnRpdGxldXJsWzBdLnVybDtcclxuICAgICAgICBwb3N0ZXIgPSBwb3N0ZXJ1cmxbMF0gJiYgcG9zdGVydXJsWzBdLnVybDtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0UGVsaSA9IHBlbGkgJiYgeyBub21icmUsIHllYXIsIHBlbGksIHN1YnRpdGxlLCBwb3N0ZXIgfVxyXG4gICAgICAgIHJldHVybiBpbnNlcnRQZWxpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0lOU0VSVEFSIFBFTElDVUFMQVMgUEFTQU5ET0xFIEVMIEHDkU8vLy8vLy8vLy8vLy9cclxuICAgIGVuZHBvaW50LnBvc3QoXCIvaW5zZXJ0cGVsaXNieXllYXJzXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVxLmJvZHkpXHJcblxyXG4gICAgICAgIHZhciB5ZWFyID0gcmVxLmJvZHkueWVhcjtcclxuICAgICAgICB2YXIgcGVsaXMgPSBbXTtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly92aXN1YWxlcy51Y2x2LmN1L1BlbGljdWxhcy9FeHRyYW5qZXJhcy8ke3llYXJ9L2BcclxuICAgICAgICAgICAgaWYgKCF1cmwpIHRocm93IG5ldyBUeXBlRXJyb3IoJ05lZWQgdG8gcHJvdmlkZSBhbiB1cmwgYXMgZmlyc3QgYXJndW1lbnQuJylcclxuICAgICAgICAgICAgY29uc3QgeyBib2R5OiBodG1sIH0gPSBhd2FpdCBnb3QodXJsKVxyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGF3YWl0IGh0bWxVcmxzKHsgaHRtbCwgdXJsIH0pXHJcblxyXG4gICAgICAgICAgICAvLyAgIGxpbmtzLmZvckVhY2goKHsgdXJsIH0pID0+IGNvbnNvbGUubG9nKHVybCkpXHJcblxyXG4gICAgICAgICAgICAvLyAgIC8vID0+IFtcclxuICAgICAgICAgICAgLy8gICAvLyAgICdodHRwczovL21pY3JvbGluay5pby9jb21wb25lbnQtLS1zcmMtbGF5b3V0cy1pbmRleC1qcy04NmI1Zjk0ZGZhNDhjYjA0YWU0MS5qcycsXHJcbiAgICAgICAgICAgIC8vICAgLy8gICAnaHR0cHM6Ly9taWNyb2xpbmsuaW8vY29tcG9uZW50LS0tc3JjLXBhZ2VzLWluZGV4LWpzLWEzMDIwMjdhYjU5MzY1NDcxYjdkLmpzJyxcclxuICAgICAgICAgICAgLy8gICAvLyAgICdodHRwczovL21pY3JvbGluay5pby9wYXRoLS0taW5kZXgtNzA5YjZjZjViOTg2YTcxMGNjM2EuanMnLFxyXG4gICAgICAgICAgICAvLyAgIC8vICAgJ2h0dHBzOi8vbWljcm9saW5rLmlvL2FwcC04YjQyNjllMWZhZGQwOGU2ZWExZS5qcycsXHJcbiAgICAgICAgICAgIC8vICAgLy8gICAnaHR0cHM6Ly9taWNyb2xpbmsuaW8vY29tbW9ucy04YjI4NmVhYzI5MzY3OGUxYzk4Yy5qcycsXHJcbiAgICAgICAgICAgIC8vICAgLy8gICAnaHR0cHM6Ly9taWNyb2xpbmsuaW8nLFxyXG4gICAgICAgICAgICAvLyAgIC8vICAgLi4uXHJcbiAgICAgICAgICAgIC8vICAgLy8gXVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSA1OyBpIDw9IGxpbmtzLmxlbmd0aCAtIDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vbWJyZSA9IGxpbmtzW2ldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoYCR7eWVhcn1fYCwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShgJTIwYCwgXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShgL2AsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYE5hbWU6ICR7bm9tYnJlfWApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGlua3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBhd2FpdCBnZXRQZWxpKG5vbWJyZSwgeWVhciwgbGlua3NbaV0udXJsKVxyXG4gICAgICAgICAgICAgICAgYSAmJiAoYS5ub21icmUgJiYgYS55ZWFyICYmIGEucGVsaSAmJiBhLnBvc3RlcikgJiYgcGVsaXMucHVzaChhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke25vbWJyZX1gKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBlbGlzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGVsaXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcGVsaXMgJiZcclxuICAgICAgICAgICAgICAgICAgICBwZWxpcy5mb3JFYWNoKCAoZWxlbWVudCkgPT4ge1xyXG4vLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICBNZXRlb3IuY2FsbChcImluc2VydFBlbGlzXCIsZWxlbWVudClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NjAwMC9pbnNlcnRQZWxpc1wiLCBlbGVtZW50LCAob3BjaW9uZXMsIHJlcywgYm9keSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFvcGNpb25lcy5oZWFkZXJzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coYHN0YXR1c0NvZGU6ICR7cmVzLnN0YXR1c0NvZGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5ub21icmUgKyBcIiA9PiBUb2RvIE9LIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50Lm5vbWJyZSArIFwiID0+IEVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KG9wY2lvbmVzLmhlYWRlcnMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9jdXJyaW8gdW4gZXJyb3IgPT4gXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKClcclxuXHJcblxyXG5cclxuICAgICAgICAvLyByZXMud3JpdGVIZWFkKDIwMCwge1xyXG4gICAgICAgIC8vICAgbWVzc2FnZTogXCJ0b2RvIE9LXCIsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gcmVzLmVuZChcInRvZG8gT0tcIilcclxuICAgIH0pO1xyXG4gICAgZW5kcG9pbnQuZ2V0KFwiL2dldHN1YnRpdGxlXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEucXVlcnkuaWRQZWxpKVxyXG4gICAgICAgIC8vIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04JylcclxuXHJcbiAgICAgICAgLy8gICByZXMuZW5kKHJlcS5xdWVyeS5pZFBlbGkpO1xyXG5cclxuICAgICAgICBsZXQgaWQgPSByZXEucXVlcnkuaWRQZWxpO1xyXG4gICAgICAgIGxldCBwZWxpc3VidGl0bGUgPSBQZWxpc0NvbGxlY3Rpb24uZmluZE9uZShyZXEucXVlcnkuaWRQZWxpKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOCcpXHJcbiAgICAgICAgcmVzLmVuZChwZWxpc3VidGl0bGUgPyBwZWxpc3VidGl0bGUudGV4dFN1YnRpdGxlIDogXCJcIik7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVuZHBvaW50LnBvc3QoXCIvY29udmVydHNydHRvdnR0XCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgICAgICBsZXQgaWQgPSByZXEuYm9keS5pZFBlbGk7XHJcbiAgICAgICAgbGV0IHBlbGkgPSBhd2FpdCBQZWxpc0NvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogaWQgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBzcnQydnR0ID0gYXdhaXQgcmVxdWlyZShcInNydC10by12dHRcIik7XHJcbiAgICAgICAgICAgIHZhciBmcyA9IGF3YWl0IHJlcXVpcmUoXCJmc1wiKTtcclxuICAgICAgICAgICAgdmFyIGFwcFJvb3QgPSBhd2FpdCByZXF1aXJlKFwiYXBwLXJvb3QtcGF0aFwiKTtcclxuICAgICAgICAgICAgdmFyIHN1YnRpdHVsb0ZpbGUgPVxyXG4gICAgICAgICAgICAgICAgYXBwUm9vdC5wYXRoICsgXCIvcHVibGljL3ZpZGVvcy9zdWJ0aXR1bG8vXCIgKyBpZCArIFwiLnZ0dFwiO1xyXG4gICAgICAgICAgICBjb25zdCBodHRwcyA9IGF3YWl0IHJlcXVpcmUoXCJodHRwc1wiKTtcclxuICAgICAgICAgICAgLy8gIWZzLmV4aXN0c1N5bmMoYXBwUm9vdC5wYXRoICsgXCIvcHVibGljL3ZpZGVvcy9zdWJ0aXR1bG9cIilcclxuICAgICAgICAgICAgLy8gICA/IGZzLm1rZGlyU3luYyhhcHBSb290LnBhdGggKyBcIi9wdWJsaWMvdmlkZW9zL3N1YnRpdHVsby9cIilcclxuICAgICAgICAgICAgLy8gICA6IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgZmlsZSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKHN1YnRpdHVsb0ZpbGUpO1xyXG4gICAgICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgcGVsaSAmJiBwZWxpLnN1YnRpdHVsbyAmJiBhd2FpdCBodHRwcy5nZXQocGVsaS5zdWJ0aXR1bG8sIGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdHJlYW0gPSByZXNwb25zZS5waXBlKHNydDJ2dHQoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJlYW0ub24oXCJmaW5pc2hcIiwgZnVuY3Rpb24gKCkge30pO1xyXG4gICAgICAgICAgICAgICAgc3RyZWFtVG9TdHJpbmcoc3RyZWFtKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgUGVsaXNDb2xsZWN0aW9uLnVwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfaWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3VidGl0bGU6IGRhdGEudG9TdHJpbmcoXCJ1dGY4XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBtdWx0aTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQWN0dWFsaXphZG8gc3VidGl0dWxvIGRlIGxhIFBlbGk6ICR7cGVsaS5ub21icmVQZWxpfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJ0b2RvIE9LXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5lcnJvciA6PiBcIiArIGVycm9yLmVycm9yKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5yZWFzb24gOj4gXCIgKyBlcnJvci5yZWFzb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLm1lc3NhZ2UgOj4gXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5lcnJvclR5cGUgOj4gXCIgKyBlcnJvci5lcnJvclR5cGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzLndyaXRlSGVhZChlcnJvci5lcnJvciwge1xyXG4gICAgICAgICAgICAvLyAgIGVycm9yOiBlcnJvci5lcnJvcixcclxuICAgICAgICAgICAgLy8gICByZWFzb246IGVycm9yLnJlYXNvbixcclxuICAgICAgICAgICAgLy8gICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAvLyAgIGVycm9yVHlwZTogZXJyb3IuZXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3I6XFxuXCIgKyBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVuZHBvaW50LnBvc3QoXCIvaW5zZXJ0UGVsaXNcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIC8vICBjb25zdCBpbnNlcnRQZWxpID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBleGlzdCA9IGF3YWl0IFBlbGlzQ29sbGVjdGlvbi5maW5kT25lKHsgdXJsUGVsaTogcmVxLmJvZHkucGVsaSB9KVxyXG4gICAgICAgIGxldCBpZCA9IGV4aXN0ID8gZXhpc3QuX2lkIDogYXdhaXQgUGVsaXNDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgICAgIG5vbWJyZVBlbGk6IHJlcS5ib2R5Lm5vbWJyZSxcclxuICAgICAgICAgICAgdXJsUGVsaTogcmVxLmJvZHkucGVsaSxcclxuICAgICAgICAgICAgdXJsQmFja2dyb3VuZDogcmVxLmJvZHkucG9zdGVyLFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbjogcmVxLmJvZHkubm9tYnJlLFxyXG4gICAgICAgICAgICB0YW1hbm86IDc5NyxcclxuICAgICAgICAgICAgbW9zdHJhcjogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidGl0dWxvOiByZXEuYm9keS5zdWJ0aXRsZSxcclxuICAgICAgICAgICAgeWVhcjogcmVxLmJvZHkueWVhclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwZWxpID0gYXdhaXQgUGVsaXNDb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IGlkIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBlbGkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBzcnQydnR0ID0gYXdhaXQgcmVxdWlyZShcInNydC10by12dHRcIik7XHJcbiAgICAgICAgICAgIHZhciBmcyA9IGF3YWl0IHJlcXVpcmUoXCJmc1wiKTtcclxuICAgICAgICAgICAgdmFyIGFwcFJvb3QgPSBhd2FpdCByZXF1aXJlKFwiYXBwLXJvb3QtcGF0aFwiKTtcclxuICAgICAgICAgICAgdmFyIHN1YnRpdHVsb0ZpbGUgPVxyXG4gICAgICAgICAgICAgICAgYXBwUm9vdC5wYXRoICsgXCIvcHVibGljL3ZpZGVvcy9zdWJ0aXR1bG8vXCIgKyBpZCArIFwiLnZ0dFwiO1xyXG4gICAgICAgICAgICBjb25zdCBodHRwcyA9IGF3YWl0IHJlcXVpcmUoXCJodHRwc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vICFmcy5leGlzdHNTeW5jKGFwcFJvb3QucGF0aCArIFwiL3B1YmxpYy92aWRlb3Mvc3VidGl0dWxvXCIpXHJcbiAgICAgICAgICAgIC8vICAgPyBmcy5ta2RpclN5bmMoYXBwUm9vdC5wYXRoICsgXCIvcHVibGljL3ZpZGVvcy9zdWJ0aXR1bG8vXCIpXHJcbiAgICAgICAgICAgIC8vICAgOiBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGZpbGUgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShzdWJ0aXR1bG9GaWxlKTtcclxuICAgICAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIHBlbGkgJiYgcGVsaS5zdWJ0aXR1bG8gJiYgYXdhaXQgaHR0cHMuZ2V0KHBlbGkuc3VidGl0dWxvLCBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmVhbSA9IHJlc3BvbnNlLnBpcGUoc3J0MnZ0dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHJlYW0ub24oXCJmaW5pc2hcIiwgZnVuY3Rpb24gKCkge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbVRvU3RyaW5nKHN0cmVhbSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBQZWxpc0NvbGxlY3Rpb24udXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBfaWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3VidGl0bGU6IGRhdGEudG9TdHJpbmcoXCJ1dGY4XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBtdWx0aTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBY3R1YWxpemFkbyBzdWJ0aXR1bG8gZGUgbGEgUGVsaTogJHtwZWxpLm5vbWJyZVBlbGl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGltZGJJZCA9IHJlcXVpcmUoJ2ltZGItaWQnKTtcclxuICAgICAgICAgICAgY29uc3QgSU1EYiA9IHJlcXVpcmUoJ2ltZGItbGlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpZGltZGIgPSBhd2FpdCBpbWRiSWQocGVsaS5ub21icmVQZWxpKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklEIGRlIElNREIgPT4gXCIgKyBpZGltZGIpXHJcblxyXG4gICAgICAgICAgICBQZWxpc0NvbGxlY3Rpb24udXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgeyBfaWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZGltZGI6IGlkaW1kYlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBtdWx0aTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBJTURiLnRyYWlsZXIoaWRpbWRiLCAodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1cmwpICAvLyBvdXRwdXQgaXMgZGlyZWN0IG1wNCB1cmwgKGFsc28gaGF2ZSBleHBpcmF0aW9uIHRpbWVvdXQpXHJcblxyXG4gICAgICAgICAgICAgICAgUGVsaXNDb2xsZWN0aW9uLnVwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7IF9pZDogaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFRyYWlsZXI6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsYXNpZmljYWNpb246IGRldGFpbHMuR2VucmVzLnNwbGl0KFwiLCBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgSU1EYi5mZXRjaChpZGltZGIsIChkZXRhaWxzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkZXRhaWxzKSAgLy8gZXRjLi4uXHJcbiAgICAgICAgICAgICAgICBQZWxpc0NvbGxlY3Rpb24udXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHsgX2lkOiBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcGNpb246IGRldGFpbHMuUGxvdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNpZmljYWNpb246IGRldGFpbHMuR2VucmVzLnNwbGl0KFwiLCBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbXVsdGk6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwidG9kbyBPS1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yIDo+IFwiICsgZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yLnJlYXNvbiA6PiBcIiArIGVycm9yLnJlYXNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvci5tZXNzYWdlIDo+ICR7ZXJyb3IubWVzc2FnZX1cXG5cclxuICAgICAgICAgICAgZXJyb3IucmVhc29uIDo+ICR7ZXJyb3IucmVhc29ufWApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yVHlwZSA6PiBcIiArIGVycm9yLmVycm9yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uOiBlcnJvci5yZWFzb24sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JUeXBlOiBlcnJvci50eXBlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIFBlbGlzQ29sbGVjdGlvbi5maW5kKHt1cmxQZWxpOnJlcS5ib2R5LnBlbGl9KS5jb3VudCgpID09IDAgJiYgYXdhaXQgaW5zZXJ0UGVsaSgpXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGVuZHBvaW50LnBvc3QoXCIvZ2V0VXNlcnNWUE5cIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB1c3VhcmlvcyA9IFtdXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiXHJcbiAgICAgICAgICAgIGF3YWl0IE1ldGVvci51c2Vycy5maW5kKHsgdnBuOiB0cnVlIH0pLmZvckVhY2goKHVzZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c3Vhcmlvcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzOiB1c2VyLnBhc3N2cG4sXHJcbiAgICAgICAgICAgICAgICAgICAgaXA6IGAxOTIuMTY4LjE4LiR7aW5kZXh9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHVzdWFyaW9zLmZvckVhY2godSA9PiBgJHtyZXN1bHR9JHt1LnVzZXJuYW1lfSBsMnRwZCAke3UucGFzc30gJHt1LmlwfVxcbmApXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG5cclxuICAgICAgICAgICAgcmVzLmVuZChyZXN1bHQpO1xyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5lcnJvciA6PiBcIiArIGVycm9yLmVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5yZWFzb24gOj4gXCIgKyBlcnJvci5yZWFzb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLm1lc3NhZ2UgOj4gXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5lcnJvclR5cGUgOj4gXCIgKyBlcnJvci5lcnJvclR5cGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgcmVzLmVuZChlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbmRwb2ludC5wb3N0KFwiL2dldGZpbGVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IEZpbGUgXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keS5ub21icmUpKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGZzLnJlYWRGaWxlKHJlcS5ib2R5LnVybCwgXCJ1dGYtOFwiLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXMuZW5kKFwiRXJyb3I6IFwiICsgZXJyKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5lbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yIDo+IFwiICsgZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLnJlYXNvbiA6PiBcIiArIGVycm9yLnJlYXNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IubWVzc2FnZSA6PiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yVHlwZSA6PiBcIiArIGVycm9yLmVycm9yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgICAgICByZXMuZW5kKGVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBlbmRwb2ludC5wb3N0KFwiL3NldGZpbGVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0IEZpbGUgXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keSkpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKHJlcS5ib2R5LnVybCwgcmVxLmJvZHkuZGF0YSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmVzLmVuZChcIkVycm9yOiBcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXMuZW5kKFwiRGF0b3MgR3VhcmRhZG9zIENvcnJlY3RhbWVudGUhISFcIilcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IuZXJyb3IgOj4gXCIgKyBlcnJvci5lcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IucmVhc29uIDo+IFwiICsgZXJyb3IucmVhc29uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5tZXNzYWdlIDo+IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IuZXJyb3JUeXBlIDo+IFwiICsgZXJyb3IuZXJyb3JUeXBlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy53cml0ZUhlYWQoZXJyb3IuZXJyb3IsIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5lcnJvcixcclxuICAgICAgICAgICAgICAgIHJlYXNvbjogZXJyb3IucmVhc29uLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGVycm9yVHlwZTogZXJyb3IuZXJyb3JUeXBlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5lbmQoZXJyb3IpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGVuZHBvaW50LnBvc3QoXCIvY3JlYXRldXNlclwiLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLmJvZHkpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgQWNjb3VudHMuY3JlYXRlVXNlcihyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXN1YXJpbyBDcmVhZG9cIiArIEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSk7XHJcblxyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKDIwMCwge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVc3VhcmlvIENyZWFkb1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yIDo+IFwiICsgZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLnJlYXNvbiA6PiBcIiArIGVycm9yLnJlYXNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IubWVzc2FnZSA6PiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yVHlwZSA6PiBcIiArIGVycm9yLmVycm9yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKGVycm9yLmVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IGVycm9yLnJlYXNvbixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvclR5cGU6IGVycm9yLmVycm9yVHlwZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXMuZW5kKCk7XHJcbiAgICB9KTtcclxuICAgIGVuZHBvaW50LnBvc3QoXCIvdXNlcnBhc3NcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcS5ib2R5LnVzZXJuYW1lICYmIEFjY291bnRzLnNldFVzZXJuYW1lKHJlcS5ib2R5LmlkLCByZXEuYm9keS51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXEuYm9keS5wYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgICAgKEFjY291bnRzLnNldFBhc3N3b3JkKHJlcS5ib2R5LmlkLCByZXEuYm9keS5wYXNzd29yZCksXHJcbiAgICAgICAgICAgICAgICAgICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZShyZXEuYm9keS5pZCwgeyAkc2V0OiB7IFwicGFzc3ZwblwiOiByZXEuYm9keS5wYXNzd29yZCB9IH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5ib2R5LmVtYWlsICYmXHJcbiAgICAgICAgICAgICAgICBNZXRlb3IudXNlcnMudXBkYXRlKHJlcS5ib2R5LmlkLCB7ICRzZXQ6IHsgXCJlbWFpbHNcIjogW3sgYWRkcmVzczogcmVxLmJvZHkuZW1haWwgfV0gfSB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5ib2R5Lm1vdmlsICYmXHJcbiAgICAgICAgICAgICAgICBNZXRlb3IudXNlcnMudXBkYXRlKHJlcS5ib2R5LmlkLCB7ICRzZXQ6IHsgXCJtb3ZpbFwiOiByZXEuYm9keS5tb3ZpbCB9IH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBcIlVzdWFyaW8gYWN0dWFsaXphZG8gXCIgKyByZXEuYm9keS5pZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXN1YXJpbyBhY3R1YWxpemFkb1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yIDo+IFwiICsgZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLnJlYXNvbiA6PiBcIiArIGVycm9yLnJlYXNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IubWVzc2FnZSA6PiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yVHlwZSA6PiBcIiArIGVycm9yLmVycm9yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKGVycm9yLmVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IGVycm9yLnJlYXNvbixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvclR5cGU6IGVycm9yLmVycm9yVHlwZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXMuZW5kKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbmRwb2ludC5wb3N0KFwiL2VsaW1pbmFyXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICAgICAgbGV0IGlkID0gcmVxLmJvZHkuaWQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKERlc2Nhcmdhc0NvbGxlY3Rpb24uZmluZE9uZSh7IGlkRmlsZTogaWQgfSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBhcHBSb290ID0gcmVxdWlyZShcImFwcC1yb290LXBhdGhcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW9GaWxlID0gYXBwUm9vdC5wYXRoICsgXCIvcHVibGljL3ZpZGVvcy9cIiArIGlkICsgXCIubXA0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZnMuZXhpc3RzU3luYyh2aWRlb0ZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBmcy51bmxpbmtTeW5jKHZpZGVvRmlsZSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnNvbGUubG9nKFwiQVJDSElWTyBcIiArIHZpZGVvRmlsZSArIFwiIEVsaW1pbmFkb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9maWxlIHJlbW92ZWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogY29uc29sZS5sb2coXCJubyBleGlzdGUgZWwgZmljaGVyb1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBEZXNjYXJnYXNDb2xsZWN0aW9uLnJlbW92ZSh7IGlkRmlsZTogaWQgfSk7XHJcbiAgICAgICAgICAgICAgICAvL2ZpbGUgcmVtb3ZlZFxyXG4gICAgICAgICAgICAgICAgLy8gcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICAgICAgICAgICAgIC8vICAgbWVzc2FnZTogXCJFbGltaW5hZG8gZWwgQXJjaGl2b1wiICsgcmVxLmJvZHkuaWRWaWRlbyxcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5lcnJvciA6PiBcIiArIGVycm9yLmVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5yZWFzb24gOj4gXCIgKyBlcnJvci5yZWFzb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLm1lc3NhZ2UgOj4gXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvci5lcnJvclR5cGUgOj4gXCIgKyBlcnJvci5lcnJvclR5cGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzLndyaXRlSGVhZChlcnJvci5lcnJvciwge1xyXG4gICAgICAgICAgICAvLyAgIGVycm9yOiBlcnJvci5lcnJvcixcclxuICAgICAgICAgICAgLy8gICByZWFzb246IGVycm9yLnJlYXNvbixcclxuICAgICAgICAgICAgLy8gICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAvLyAgIGVycm9yVHlwZTogZXJyb3IuZXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5lbmQoKTtcclxuICAgIH0pO1xyXG4gICAgLy8gZW5kcG9pbnQucG9zdChcIi9kZXNjYXJnYVwiLCAocmVxLCByZXMpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB5b3V0dWJlZGwgPSByZXF1aXJlKFwieW91dHViZS1kbFwiKTtcclxuXHJcbiAgICAvLyAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9XCIgKyByZXEuYm9keS5pZFZpZGVvO1xyXG4gICAgLy8gICAgIC8vIE9wdGlvbmFsIGFyZ3VtZW50cyBwYXNzZWQgdG8geW91dHViZS1kbC5cclxuICAgIC8vICAgICBjb25zdCBvcHRpb25zID0gW1wiLS11c2VybmFtZT11c2VyXCIsIFwiLS1wYXNzd29yZD1odW50ZXIyXCJdO1xyXG5cclxuICAgIC8vICAgICBpZiAoIURlc2Nhcmdhc0NvbGxlY3Rpb24uZmluZE9uZSh7IGlkRmlsZTogcmVxLmJvZHkuaWRWaWRlbyB9KSkge1xyXG4gICAgLy8gICAgICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlc2NhcmdhbmRvOlwiICsgcmVxLmJvZHkuaWRWaWRlbyxcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgeW91dHViZURvd25sb2FkKHJlcS5ib2R5LmlkVmlkZW8sICgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFERCBWSURFTzogXCIgKyBKU09OLnN0cmluZ2lmeShyZXEuYm9keS5pZFZpZGVvKSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IuZXJyb3IgOj4gXCIgKyBlcnJvcik7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yLnJlYXNvbiA6PiBcIiArZXJyb3IucmVhc29uKVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5tZXNzYWdlIDo+IFwiICtlcnJvci5tZXNzYWdlKVxyXG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvci5lcnJvclR5cGUgOj4gXCIgK2Vycm9yLmVycm9yVHlwZSlcclxuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgeW91dHViZWRsLmdldEluZm8odXJsLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyLCBpbmZvKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgRGVzY2FyZ2FzQ29sbGVjdGlvbi5pbnNlcnQoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlkRmlsZTogcmVxLmJvZHkuaWRWaWRlbyxcclxuICAgIC8vICAgICAgICAgICAgICAgICBub21icmVGaWxlOiBpbmZvLnRpdGxlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRhbWFub0ZpbGU6IGluZm8uZmlsZXNpemUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29tZW50YXJpb3M6IGluZm8uZGVzY3JpcHRpb24sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVzY2FyZ2Fkb1BvcjogcmVxLmJvZHkuY3JlYWRvUG9yLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRodW1ibmFpbDogaW5mby50aHVtYm5haWwsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdXJsUmVhbDogXCIvdmlkZW9zL1wiICsgcmVxLmJvZHkuaWRWaWRlbyArIFwiLm1wNFwiLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHVybDogaW5mby51cmwsXHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgZmljaGVybyBcIiArIHJlcS5ib2R5LmlkVmlkZW8gKyBcIiB5YSBleGlzdGVcIixcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdpZDonLCBpbmZvLmlkKVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCd0aXRsZTonLCBpbmZvLnRpdGxlKVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCd1cmw6JywgaW5mby51cmwpXHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ3RodW1ibmFpbDonLCBpbmZvLnRodW1ibmFpbClcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnZGVzY3JpcHRpb246JywgaW5mby5kZXNjcmlwdGlvbilcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnZmlsZW5hbWU6JywgaW5mby5fZmlsZW5hbWUpXHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm1hdCBpZDonLCBpbmZvKVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlc2l6ZSBpZDonLCBpbmZvLmZpbGVzaXplKVxyXG5cclxuICAgIC8vICAgICByZXMuZW5kKCk7XHJcbiAgICAvLyB9KTtcclxuICAgIGVuZHBvaW50LnBvc3QoXCIvcGVsaXNcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFBlbGlzQ29sbGVjdGlvbi5maW5kKHt9LCB7IGRlc2NyaXBjaW9uOiAwIH0pLmZldGNoKCkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gW107XHJcbiAgICAgICAgICAgIFBlbGlzQ29sbGVjdGlvbi5maW5kKHt9KS5tYXAoKHBlbGlHZW5lcmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwZWxpR2VuZXJhbCk7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIF9pZDogcGVsaUdlbmVyYWwuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZVBlbGk6IHBlbGlHZW5lcmFsLm5vbWJyZVBlbGksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFtYW5vOiBwZWxpR2VuZXJhbC50YW1hbm8sXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsQmFja2dyb3VuZDogcGVsaUdlbmVyYWwudXJsQmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgICAgICB1cmxQZWxpOiBwZWxpR2VuZXJhbC51cmxQZWxpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXBjaW9uOiBkZXNjcmlwY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAvLyB2aXN0YXM6dmlzdGFzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHllYXI6eWVhcixcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGFzaWZpY2FjaW9uOmNsYXNpZmljYWNpb24sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnRlb1Bvc3QgPSBjb250ZW9Qb3N0ICsgMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVvUG9zdCArIFwiIHBldGljaW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHtcclxuICAgICAgICAgICAgICAgIGpzb246IEpTT04uc3RyaW5naWZ5KGEpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yIDo+IFwiICsgZXJyb3IuZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLnJlYXNvbiA6PiBcIiArIGVycm9yLnJlYXNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IubWVzc2FnZSA6PiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yLmVycm9yVHlwZSA6PiBcIiArIGVycm9yLmVycm9yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgICAgICByZXMud3JpdGVIZWFkKGVycm9yLmVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IGVycm9yLnJlYXNvbixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvclR5cGU6IGVycm9yLmVycm9yVHlwZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXMuZW5kKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbmRwb2ludC5yb3V0ZSgnL3ZlbnRhc2pzb24nKVxyXG4gICAgICAgIC5nZXQoZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhc3RvcyA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsQVBhZ2FyID0gMDtcclxuICAgICAgICAgICAgICAgIFZlbnRhc0NvbGxlY3Rpb24uZmluZCh7fSkubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRtaW5JZCA9PSBpZCAmJiAhZWxlbWVudC5jb2JyYWRvICYmICh0b3RhbEFQYWdhciArPSBlbGVtZW50LnByZWNpbylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWxBUGFnYXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBHRVQgL3BldC86aWRcclxuICAgICAgICAgICAgbGV0IHJlc3VsdGFkbyA9IFtdXHJcbiAgICAgICAgICAgIE1ldGVvci51c2Vycy5maW5kKCkubWFwKHVzdWFyaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhZ28gPSBnYXN0b3ModXN1YXJpby5faWQpXHJcbiAgICAgICAgICAgICAgICBwYWdvICYmIHJlc3VsdGFkby5wdXNoKHsgdXN1YXJpbzogYCR7dXN1YXJpby5wcm9maWxlLmZpcnN0TmFtZX0gJHt1c3VhcmlvLnByb2ZpbGUubGFzdE5hbWV9YCwgZGViZTogcGFnbyB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdGFkbykpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBlbmRwb2ludC5yb3V0ZSgnL3VzZXJzanNvbicpXHJcbiAgICAgICAgLmdldChmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBHRVQgL3BldC86aWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHEgPSByZXEucXVlcnkgPyByZXEucXVlcnkgOiB7fVxyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoTWV0ZW9yLnVzZXJzLmZpbmQocSkuZmV0Y2goKSkpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgZW5kcG9pbnQucm91dGUoJy91cGRhdGV1c2VyJylcclxuICAgICAgICAucG9zdChmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyBERUxFVEUgL3BldC86aWRcclxuXHJcbiAgICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHJlcS5xdWVyeS5pZCA/IHJlcS5xdWVyeS5pZCA6IHt9XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVxLnF1ZXJ5ID8gcmVxLnF1ZXJ5IDoge31cclxuICAgICAgICAgICAgZGVsZXRlIGRhdGFbMF1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgdXBkYXRlID0gTWV0ZW9yLnVzZXJzLnVwZGF0ZShcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgeyAkc2V0OiBkYXRhIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBzZXJ0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcclxuICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHVwZGF0ZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgLy8gICAgIGVycm9yOiBgRXJyb3I6ICR7ZXJyb3J9YFxyXG4gICAgICAgICAgICAvLyAgIH0pKVxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBcclxuICBXZWJBcHAuY29ubmVjdEhhbmRsZXJzLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbiAgV2ViQXBwLmNvbm5lY3RIYW5kbGVycy51c2UoZW5kcG9pbnQpO1xyXG59IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcclxuaW1wb3J0IHsgT25saW5lQ29sbGVjdGlvbiB9IGZyb20gXCIuLi9pbXBvcnRzL3VpL3BhZ2VzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJyb3V0ZXJcIjtcclxuXHJcbmNvbnN0IGVuZHBvaW50ID0gcm91dGVyKCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tRXN0ZSBQcm94eSBGdW5jaW9uYSBhbCBGVUxMTExMTExMTC0tLS0tLS0tLS0tXHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25lY3Qoc2VydmVyLCBjb25uZWN0aW9uSWQsIHVzZXJJZCwgaG9zdG5hbWUpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgT25saW5lQ29sbGVjdGlvbi5pbnNlcnQoe1xyXG4gICAgICBjb25uZWN0aW9uSWQ6IGAke3NlcnZlcn0ke2Nvbm5lY3Rpb25JZC50b1N0cmluZygpfWAsXHJcbiAgICAgIGFkZHJlc3M6IFwicHJveHk6IFwiICsgTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5JUCxcclxuICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgIGhvc3RuYW1lOiBob3N0bmFtZSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICAvLyBhd2FpdCBNZXRlb3IudXNlcnMudXBkYXRlKHVzZXJJZCwge1xyXG4gIC8vICAgJHNldDoge1xyXG4gIC8vICAgICBvbmxpbmU6IHRydWUsXHJcbiAgLy8gICB9LFxyXG4gIC8vIH0pO1xyXG4gIC8vIHJldHVybiB0cnVlXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29uZWN0KHNlcnZlciwgY29ubmVjdGlvbklkLCBzdGF0cykge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBhd2FpdCBjb25zb2xlLmxvZygncmVtb3ZlICcgKyBjb25uZWN0aW9uSWQpO1xyXG4gICAgY29uc3QgY29ubiA9IGF3YWl0IE9ubGluZUNvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICAgIGNvbm5lY3Rpb25JZDogYCR7c2VydmVyfSR7Y29ubmVjdGlvbklkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgLy8gc2VydmVyOiBwcm9jZXNzLmVudi5ST09UX1VSTFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1c2VyID0gY29ubiAmJiBjb25uLnVzZXJJZCAmJiBNZXRlb3IudXNlcnMuZmluZE9uZShjb25uLnVzZXJJZCk7XHJcbiAgICBsZXQgYnl0ZXNHYXN0YWRvcyA9IE51bWJlcihzdGF0cy5zcmNUeEJ5dGVzKSArIE51bWJlcihzdGF0cy5zcmNSeEJ5dGVzKTtcclxuICAgIC8vICsgTnVtYmVyKHN0YXRzLnRyZ1R4Qnl0ZXMpICsgTnVtYmVyKHN0YXRzLiB0cmdSeEJ5dGVzKVxyXG4gICAgbGV0IGJ5dGVzR2FzdGFkb3NHZW5lcmFsID1cclxuICAgICAgTnVtYmVyKHN0YXRzLnNyY1R4Qnl0ZXMpICtcclxuICAgICAgTnVtYmVyKHN0YXRzLnNyY1J4Qnl0ZXMpICtcclxuICAgICAgTnVtYmVyKHN0YXRzLnRyZ1R4Qnl0ZXMpICtcclxuICAgICAgTnVtYmVyKHN0YXRzLnRyZ1J4Qnl0ZXMpO1xyXG4gICAgdXNlciAmJlxyXG4gICAgICB1c2VyLl9pZCAmJlxyXG4gICAgICB1c2VyLmNvbnRhbmRvUHJveHkgJiZcclxuICAgICAgKGF3YWl0IE1ldGVvci51c2Vycy51cGRhdGUodXNlci5faWQsIHtcclxuICAgICAgICAkaW5jOiB7IG1lZ2FzR2FzdGFkb3NpbkJ5dGVzOiBieXRlc0dhc3RhZG9zIH0sXHJcbiAgICAgIH0pKTtcclxuICAgIHVzZXIgJiZcclxuICAgICAgdXNlci5faWQgJiZcclxuICAgICAgdXNlci5jb250YW5kb1Byb3h5ICYmXHJcbiAgICAgIChhd2FpdCBNZXRlb3IudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XHJcbiAgICAgICAgJGluYzogeyBtZWdhc0dhc3RhZG9zaW5CeXRlc0dlbmVyYWw6IGJ5dGVzR2FzdGFkb3NHZW5lcmFsIH0sXHJcbiAgICAgIH0pKTtcclxuICAgIGNvbm4gJiYgY29ubi5faWQgJiYgKGF3YWl0IE9ubGluZUNvbGxlY3Rpb24ucmVtb3ZlKGNvbm4uX2lkKSk7XHJcbiAgICAvLyBhd2FpdCBjb25zb2xlLmxvZyhpZG9mY29ubiYmaWRvZmNvbm4uX2lkKTtcclxuICAgIC8vIGF3YWl0IE1ldGVvci51c2Vycy51cGRhdGUodXNlcklkLCB7XHJcbiAgICAvLyAgICRzZXQ6IHtcclxuICAgIC8vICAgICBvbmxpbmU6IHRydWUsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKFwiSW5pY2lhbmRvIFByb3h5IHBvciBlbCBwdWVydG8gMzAwMlwiKTtcclxuICB2YXIgY3JvbiA9IHJlcXVpcmUoXCJub2RlLWNyb25cIik7XHJcblxyXG4gIGNvbnN0IFByb3h5Q2hhaW4gPSByZXF1aXJlKFwicHJveHktY2hhaW5cIik7XHJcbiAgdmFyIGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRcIik7XHJcbiAgLy8gdmFyIHNoYTI1NiA9IHJlcXVpcmUoXCJzaGEyNTZcIik7XHJcbiAgY29uc3QgY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcclxuXHJcbiAgdmFyIHNlcnZlcjIgXHJcbiAgPSBuZXcgUHJveHlDaGFpbi5TZXJ2ZXIoe1xyXG4gICAgLy8gUG9ydCB3aGVyZSB0aGUgc2VydmVyIHdpbGwgbGlzdGVuLiBCeSBkZWZhdWx0IDgwMDAuXHJcbiAgICBwb3J0OiAzMDAyLFxyXG4gICAgYXV0aFJlYWxtOiBcIlNlcnZpY2UgVmlkS2FyXCIsXHJcbiAgICAvLyBFbmFibGVzIHZlcmJvc2UgbG9nZ2luZ1xyXG4gICAgLy8gdmVyYm9zZTogdHJ1ZSxcclxuXHJcbiAgICAvLyBDdXN0b20gdXNlci1kZWZpbmVkIGZ1bmN0aW9uIHRvIGF1dGhlbnRpY2F0ZSBpbmNvbWluZyBwcm94eSByZXF1ZXN0cyxcclxuICAgIC8vIGFuZCBvcHRpb25hbGx5IHByb3ZpZGUgdGhlIFVSTCB0byBjaGFpbmVkIHVwc3RyZWFtIHByb3h5LlxyXG4gICAgLy8gVGhlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGFuIG9iamVjdCAob3IgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIG9iamVjdCkgd2l0aCB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcclxuICAgIC8vIHsgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiBCb29sZWFuLCB1cHN0cmVhbVByb3h5VXJsOiBTdHJpbmcgfVxyXG4gICAgLy8gSWYgdGhlIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkIG9yIGlzIG51bGwsIHRoZSBzZXJ2ZXIgcnVucyBpbiBzaW1wbGUgbW9kZS5cclxuICAgIC8vIE5vdGUgdGhhdCB0aGUgZnVuY3Rpb24gdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbiAgICAvLyAqIHJlcXVlc3QgICAgICAtIEFuIGluc3RhbmNlIG9mIGh0dHAuSW5jb21pbmdNZXNzYWdlIGNsYXNzIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudCByZXF1ZXN0XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICh3aGljaCBpcyBlaXRoZXIgSFRUUCBDT05ORUNUIGZvciBTU0wgcHJvdG9jb2wsIG9yIG90aGVyIEhUVFAgcmVxdWVzdClcclxuICAgIC8vICogdXNlcm5hbWUgICAgIC0gVXNlcm5hbWUgcGFyc2VkIGZyb20gdGhlIFByb3h5LUF1dGhvcml6YXRpb24gaGVhZGVyLiBNaWdodCBiZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAvLyAqIHBhc3N3b3JkICAgICAtIFBhc3N3b3JkIHBhcnNlZCBmcm9tIHRoZSBQcm94eS1BdXRob3JpemF0aW9uIGhlYWRlci4gTWlnaHQgYmUgZW1wdHkgc3RyaW5nLlxyXG4gICAgLy8gKiBob3N0bmFtZSAgICAgLSBIb3N0bmFtZSBvZiB0aGUgdGFyZ2V0IHNlcnZlclxyXG4gICAgLy8gKiBwb3J0ICAgICAgICAgLSBQb3J0IG9mIHRoZSB0YXJnZXQgc2VydmVyXHJcbiAgICAvLyAqIGlzSHR0cCAgICAgICAtIElmIHRydWUsIHRoaXMgaXMgYSBIVFRQIHJlcXVlc3QsIG90aGVyd2lzZSBpdCdzIGEgSFRUUCBDT05ORUNUIHR1bm5lbCBmb3IgU1NMXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIG9yIG90aGVyIHByb3RvY29sc1xyXG4gICAgLy8gKiBjb25uZWN0aW9uSWQgLSBVbmlxdWUgSUQgb2YgdGhlIEhUVFAgY29ubmVjdGlvbi4gSXQgY2FuIGJlIHVzZWQgdG8gb2J0YWluIHRyYWZmaWMgc3RhdGlzdGljcy5cclxuICAgIHByZXBhcmVSZXF1ZXN0RnVuY3Rpb246IGFzeW5jICh7XHJcbiAgICAgIHJlcXVlc3QsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgaG9zdG5hbWUsXHJcbiAgICAgIHBvcnQsXHJcbiAgICAgIGlzSHR0cCxcclxuICAgICAgY29ubmVjdGlvbklkLFxyXG4gICAgfSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGIgPSBhd2FpdCBNZXRlb3IudXNlcnMuZmluZE9uZSh7IHVzZXJuYW1lOiB1c2VybmFtZSB9KTtcclxuICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgY29uc3QgdXNlcklucHV0ID0gY3J5cHRvXHJcbiAgICAgICAgICAgIC5IYXNoKFwic2hhMjU2XCIpXHJcbiAgICAgICAgICAgIC51cGRhdGUocGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XHJcbiAgICAgICAgICBjb25zdCBhID0gYXdhaXQgYmNyeXB0LmNvbXBhcmVTeW5jKFxyXG4gICAgICAgICAgICB1c2VySW5wdXQsXHJcbiAgICAgICAgICAgIGIgJiYgYi5zZXJ2aWNlcy5wYXNzd29yZC5iY3J5cHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFhIHx8XHJcbiAgICAgICAgICAgIGIuYmFuZWFkbyB8fFxyXG4gICAgICAgICAgICAoYi5pcCA/ICEoYi5pcCA9PSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLklQKSA6IGZhbHNlKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZhaWxNc2c6IFwiQ29udHJhc2XDsWEgaW5jb3JyZWN0YSwgVnVlbHZhIGEgaW50ZW50YXJsbyBudWV2YW1lbnRlXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Rpb25JZCAmJiBjb25lY3QoXCIzMDAyOlwiLCBjb25uZWN0aW9uSWQsIGIuX2lkLCBob3N0bmFtZSk7XHJcbiAgICAgICAgICAgICAgLy8gaWYoIGF3YWl0IGNvbmVjdChjb25uZWN0aW9uSWQsYiYmYi5faWQpKVxyXG4gICAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBmYWlsTXNnOiBcIlVzdWFyaW8gbm8gRXhpc3RlXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLy8gSWYgc2V0IHRvIHRydWUsIHRoZSBjbGllbnQgaXMgc2VudCBIVFRQIDQwNyByZXNwb3NuZSB3aXRoIHRoZSBQcm94eS1BdXRoZW50aWNhdGUgaGVhZGVyIHNldCxcclxuICAgICAgICAgIC8vIHJlcXVpcmluZyBCYXNpYyBhdXRoZW50aWNhdGlvbi4gSGVyZSB5b3UgY2FuIHZlcmlmeSB1c2VyIGNyZWRlbnRpYWxzLlxyXG4gICAgICAgICAgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgLy8gcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB1c2VybmFtZSAhPT0gJ2JvYicgfHwgcGFzc3dvcmQgIT09ICcxMjMnLFxyXG5cclxuICAgICAgICAgIC8vIFNldHMgdXAgYW4gdXBzdHJlYW0gSFRUUCBwcm94eSB0byB3aGljaCBhbGwgdGhlIHJlcXVlc3RzIGFyZSBmb3J3YXJkZWQuXHJcbiAgICAgICAgICAvLyBJZiBudWxsLCB0aGUgcHJveHkgd29ya3MgaW4gZGlyZWN0IG1vZGUsIGkuZS4gdGhlIGNvbm5lY3Rpb24gaXMgZm9yd2FyZGVkIGRpcmVjdGx5XHJcbiAgICAgICAgICAvLyB0byB0aGUgdGFyZ2V0IHNlcnZlci4gVGhpcyBmaWVsZCBpcyBpZ25vcmVkIGlmIFwicmVxdWVzdEF1dGhlbnRpY2F0aW9uXCIgaXMgdHJ1ZS5cclxuICAgICAgICAgIC8vIFRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgc2hvdWxkIGJlIFVSSS1lbmNvZGVkLCBpbiBjYXNlIGl0IGNvbnRhaW5zIHNvbWUgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gICAgICAgICAgLy8gU2VlIGBwYXJzZVVybCgpYCBmdW5jdGlvbiBmb3IgZGV0YWlscy5cclxuICAgICAgICAgIC8vIHVwc3RyZWFtUHJveHlVcmw6IGBodHRwOi8vdXNlcm5hbWU6cGFzc3dvcmRAcHJveHkuZXhhbXBsZS5jb206MzEyOGAsXHJcblxyXG4gICAgICAgICAgLy8gSWYgXCJyZXF1ZXN0QXV0aGVudGljYXRpb25cIiBpcyB0cnVlLCB5b3UgY2FuIHVzZSB0aGUgZm9sbG93aW5nIHByb3BlcnR5XHJcbiAgICAgICAgICAvLyB0byBkZWZpbmUgYSBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byByZXR1cm4gdG8gdGhlIGNsaWVudCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IFwiUHJveHkgY3JlZGVudGlhbHMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgZmFpbE1zZzpcclxuICAgICAgICAgICAgXCJQb3IgRmF2b3IsIHJlaW50ZW50ZWxvIGRlIG51ZXZvLCBvY3VycmlvIHVuIHByb2JsZW1hIGVuIGVsIHNlcnZpZG9yXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgc2VydmVyMi5saXN0ZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFNlcnZpZG9yIFByb3h5IGluaWNpYWRvIHBvciBlbCBwdWVydG86ICR7c2VydmVyMi5wb3J0fWApO1xyXG4gIH0pO1xyXG5cclxuICAvLyBFbWl0dGVkIHdoZW4gSFRUUCBjb25uZWN0aW9uIGlzIGNsb3NlZFxyXG4gIHNlcnZlcjIub24oXCJjb25uZWN0aW9uQ2xvc2VkXCIsICh7IGNvbm5lY3Rpb25JZCwgc3RhdHMgfSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYENvbm5lY3Rpb24gJHtjb25uZWN0aW9uSWR9IGNsb3NlZGApO1xyXG4gICAgLy8gY29uc29sZS5kaXIoc3RhdHMpO1xyXG4gICAgZGlzY29uZWN0KFwiMzAwMjpcIiwgY29ubmVjdGlvbklkLCBzdGF0cyk7XHJcbiAgfSk7XHJcbiAgLy8gRW1pdHRlZCB3aGVuIEhUVFAgcmVxdWVzdCBmYWlsc1xyXG4gIHNlcnZlcjIub24oXCJyZXF1ZXN0RmFpbGVkXCIsICh7IHJlcXVlc3QsIGVycm9yIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0ICR7cmVxdWVzdC51cmx9IGZhaWxlZGApO1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIGNyb25cclxuICAgIC5zY2hlZHVsZShcclxuICAgICAgXCIwLTU5IDAtMjMgMS0zMSAxLTEyICpcIixcclxuICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vLy8vLy8vLy8vQUNUVUFMSVpBUiBWUE4gQ09OTkVDVEFEQVMgTUlSQU5ETyBQQVJBIEVMIENVRVJQTyAxMzVcclxuICAgICAgICAvLyBNZXRlb3IudXNlcnMuZmluZCh7IHZwbjogdHJ1ZSB9KS5mb3JFYWNoKGFzeW5jICh1c2VyKSA9PiB7XHJcblxyXG4gICAgICAgIC8vICAgbGV0IGRpc3BvbmlibGUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgdHJ5IHtcclxuICAgICAgICAvLyAgICAgYXdhaXQgdGNwcC5wcm9iZShgMTkyLjE2OC4xOC4ke3VzZXIudnBuaXB9YCwgMTM1LCBhc3luYyBmdW5jdGlvbiAoZXJyLCBhdmFpbGFibGUpIHtcclxuICAgICAgICAvLyAgICAgICBlcnIgJiYgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgLy8gICAgICAgZGlzcG9uaWJsZSA9IGF2YWlsYWJsZTtcclxuICAgICAgICAvLyAgICAgICBNZXRlb3IudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XHJcbiAgICAgICAgLy8gICAgICAgICAkc2V0OiB7IHZwbkNvbm5lY3RlZDogZGlzcG9uaWJsZSB9XHJcbiAgICAgICAgLy8gICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICBsZXQgYXJyYXlJZHMgPSBbXTtcclxuICAgICAgICAgIGF3YWl0IHNlcnZlcjIuZ2V0Q29ubmVjdGlvbklkcygpLm1hcCgoaWQpID0+IHtcclxuICAgICAgICAgICAgYXJyYXlJZHMucHVzaChcIjMwMDI6XCIgKyBpZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGF3YWl0IE9ubGluZUNvbGxlY3Rpb24uZmluZCh7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwicHJveHk6IFwiICsgTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5JUCxcclxuICAgICAgICAgIH0pLmZvckVhY2goKGNvbm5lY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgIWFycmF5SWRzLmZpbmQoKGlkKSA9PiBjb25uZWN0aW9uLmNvbm5lY3Rpb25JZCA9PSBpZCkgJiYgKFxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBjb25uZWN0aW9uLmNvbm5lY3Rpb25JZCArIFwiIE5PIEVTVEEgQ09ORUNUQURPXCIpLFxyXG4gICAgICAgICAgICAgIE9ubGluZUNvbGxlY3Rpb24ucmVtb3ZlKGNvbm5lY3Rpb24uX2lkKSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2NoZWR1bGVkOiB0cnVlLFxyXG4gICAgICAgIHRpbWV6b25lOiBcIkFtZXJpY2EvSGF2YW5hXCIsXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC5zdGFydCgpO1xyXG5cclxuICAvLyBjcm9uXHJcbiAgLy8gLnNjaGVkdWxlKFxyXG4gIC8vICAgXCIwLTU5IDAtMjMgMS0zMSAxLTEyICpcIixcclxuICAvLyAgIGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgbGV0IGFycmF5SWRzID0gYXdhaXQgc2VydmVyMy5nZXRDb25uZWN0aW9uSWRzKCk7XHJcbiAgLy8gICAgIGF3YWl0IE9ubGluZUNvbGxlY3Rpb24uZmluZCh7IGFkZHJlc3M6IFwicHJveHlcIiB9KS5mb3JFYWNoKFxyXG4gIC8vICAgICAgIGFzeW5jIChjb25uZWN0aW9uKSA9PiB7XHJcbiAgLy8gICAgICAgIGF3YWl0ICFhcnJheUlkcy5maW5kKChpZCkgPT4gY29ubmVjdGlvbi5jb25uZWN0aW9uSWQgPT0gaWQpICYmXHJcbiAgLy8gICAgICAgICAgIChhd2FpdCBPbmxpbmVDb2xsZWN0aW9uLnJlbW92ZSh7XHJcbiAgLy8gICAgICAgICAgICAgY29ubmVjdGlvbklkOiBjb25uZWN0aW9uLmNvbm5lY3Rpb25JZCxcclxuICAvLyAgICAgICAgICAgfSkpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgKTtcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHNjaGVkdWxlZDogdHJ1ZSxcclxuICAvLyAgICAgdGltZXpvbmU6IFwiQW1lcmljYS9IYXZhbmFcIixcclxuICAvLyAgIH1cclxuICAvLyApXHJcbiAgLy8gLnN0YXJ0KCk7XHJcbiAgTWV0ZW9yLm1ldGhvZHMoe1xyXG4gICAgY2xvc2Vwcm94eTogKCk9PntcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgIC8vIGNvbnNvbGUubG9nKFBlbGlzQ29sbGVjdGlvbi5maW5kKHt9LCB7IGRlc2NyaXBjaW9uOiAwIH0pLmZldGNoKCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2VydmVyMi5jbG9zZSh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFByb3h5IHNlcnZlcjIgUG9ydDoke3NlcnZlcjIucG9ydH0gd2FzIGNsb3NlZC5gKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gXCJTZSBkZXR1dm8gY29ycmVjdGFtZW50ZSBlbCBwcm94eVwiXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1FUlJPUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yKTtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgICAgIHJldHVybiBgSHVibyBlcnJvcmVzIGFsIGRldGVuZXIgZWwgcHJveHkhYFxyXG5cclxuICAgICAgLy8gcmVzLnNlbmQoZXJyb3IuZXJyb3IsIHtcclxuICAgICAgLy8gICBlcnJvcjogZXJyb3IuZXJyb3IsXHJcbiAgICAgIC8vICAgcmVhc29uOiBlcnJvci5yZWFzb24sXHJcbiAgICAgIC8vICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgLy8gICBlcnJvclR5cGU6IGVycm9yLmVycm9yVHlwZSxcclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGxpc3RlbnByb3h5OigpPT57XHJcblxyXG4gICAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgLy8gY29uc29sZS5sb2coUGVsaXNDb2xsZWN0aW9uLmZpbmQoe30sIHsgZGVzY3JpcGNpb246IDAgfSkuZmV0Y2goKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXJ2ZXIyID0gbmV3IFByb3h5Q2hhaW4uU2VydmVyKHtcclxuICAgICAgICAvLyBQb3J0IHdoZXJlIHRoZSBzZXJ2ZXIgd2lsbCBsaXN0ZW4uIEJ5IGRlZmF1bHQgODAwMC5cclxuICAgICAgICBwb3J0OiAzMDAyLFxyXG4gICAgICAgIGF1dGhSZWFsbTogXCJTZXJ2aWNlIFZpZEthclwiLFxyXG4gICAgICAgIC8vIEVuYWJsZXMgdmVyYm9zZSBsb2dnaW5nXHJcbiAgICAgICAgLy8gdmVyYm9zZTogdHJ1ZSxcclxuXHJcbiAgICAgICAgLy8gQ3VzdG9tIHVzZXItZGVmaW5lZCBmdW5jdGlvbiB0byBhdXRoZW50aWNhdGUgaW5jb21pbmcgcHJveHkgcmVxdWVzdHMsXHJcbiAgICAgICAgLy8gYW5kIG9wdGlvbmFsbHkgcHJvdmlkZSB0aGUgVVJMIHRvIGNoYWluZWQgdXBzdHJlYW0gcHJveHkuXHJcbiAgICAgICAgLy8gVGhlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGFuIG9iamVjdCAob3IgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIG9iamVjdCkgd2l0aCB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcclxuICAgICAgICAvLyB7IHJlcXVlc3RBdXRoZW50aWNhdGlvbjogQm9vbGVhbiwgdXBzdHJlYW1Qcm94eVVybDogU3RyaW5nIH1cclxuICAgICAgICAvLyBJZiB0aGUgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQgb3IgaXMgbnVsbCwgdGhlIHNlcnZlciBydW5zIGluIHNpbXBsZSBtb2RlLlxyXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGUgZnVuY3Rpb24gdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbiAgICAgICAgLy8gKiByZXF1ZXN0ICAgICAgLSBBbiBpbnN0YW5jZSBvZiBodHRwLkluY29taW5nTWVzc2FnZSBjbGFzcyB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnQgcmVxdWVzdFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgKHdoaWNoIGlzIGVpdGhlciBIVFRQIENPTk5FQ1QgZm9yIFNTTCBwcm90b2NvbCwgb3Igb3RoZXIgSFRUUCByZXF1ZXN0KVxyXG4gICAgICAgIC8vICogdXNlcm5hbWUgICAgIC0gVXNlcm5hbWUgcGFyc2VkIGZyb20gdGhlIFByb3h5LUF1dGhvcml6YXRpb24gaGVhZGVyLiBNaWdodCBiZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgLy8gKiBwYXNzd29yZCAgICAgLSBQYXNzd29yZCBwYXJzZWQgZnJvbSB0aGUgUHJveHktQXV0aG9yaXphdGlvbiBoZWFkZXIuIE1pZ2h0IGJlIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAqIGhvc3RuYW1lICAgICAtIEhvc3RuYW1lIG9mIHRoZSB0YXJnZXQgc2VydmVyXHJcbiAgICAgICAgLy8gKiBwb3J0ICAgICAgICAgLSBQb3J0IG9mIHRoZSB0YXJnZXQgc2VydmVyXHJcbiAgICAgICAgLy8gKiBpc0h0dHAgICAgICAgLSBJZiB0cnVlLCB0aGlzIGlzIGEgSFRUUCByZXF1ZXN0LCBvdGhlcndpc2UgaXQncyBhIEhUVFAgQ09OTkVDVCB0dW5uZWwgZm9yIFNTTFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgb3Igb3RoZXIgcHJvdG9jb2xzXHJcbiAgICAgICAgLy8gKiBjb25uZWN0aW9uSWQgLSBVbmlxdWUgSUQgb2YgdGhlIEhUVFAgY29ubmVjdGlvbi4gSXQgY2FuIGJlIHVzZWQgdG8gb2J0YWluIHRyYWZmaWMgc3RhdGlzdGljcy5cclxuICAgICAgICBwcmVwYXJlUmVxdWVzdEZ1bmN0aW9uOiBhc3luYyAoe1xyXG4gICAgICAgICAgcmVxdWVzdCxcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICBob3N0bmFtZSxcclxuICAgICAgICAgIHBvcnQsXHJcbiAgICAgICAgICBpc0h0dHAsXHJcbiAgICAgICAgICBjb25uZWN0aW9uSWQsXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kT25lKHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pO1xyXG4gICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IGNyeXB0b1xyXG4gICAgICAgICAgICAgICAgLkhhc2goXCJzaGEyNTZcIilcclxuICAgICAgICAgICAgICAgIC51cGRhdGUocGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGEgPSBhd2FpdCBiY3J5cHQuY29tcGFyZVN5bmMoXHJcbiAgICAgICAgICAgICAgICB1c2VySW5wdXQsXHJcbiAgICAgICAgICAgICAgICBiICYmIGIuc2VydmljZXMucGFzc3dvcmQuYmNyeXB0XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhYSB8fFxyXG4gICAgICAgICAgICAgICAgYi5iYW5lYWRvIHx8XHJcbiAgICAgICAgICAgICAgICAoYi5pcCA/ICEoYi5pcCA9PSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLklQKSA6IGZhbHNlKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBmYWlsTXNnOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udHJhc2XDsWEgaW5jb3JyZWN0YSwgVnVlbHZhIGEgaW50ZW50YXJsbyBudWV2YW1lbnRlXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICBjb25uZWN0aW9uSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb25lY3QoXCIzMDAyOlwiLCBjb25uZWN0aW9uSWQsIGIuX2lkLCBob3N0bmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmKCBhd2FpdCBjb25lY3QoY29ubmVjdGlvbklkLGImJmIuX2lkKSlcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmFpbE1zZzogXCJVc3VhcmlvIG5vIEV4aXN0ZVwiLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC8vIElmIHNldCB0byB0cnVlLCB0aGUgY2xpZW50IGlzIHNlbnQgSFRUUCA0MDcgcmVzcG9zbmUgd2l0aCB0aGUgUHJveHktQXV0aGVudGljYXRlIGhlYWRlciBzZXQsXHJcbiAgICAgICAgICAgICAgLy8gcmVxdWlyaW5nIEJhc2ljIGF1dGhlbnRpY2F0aW9uLiBIZXJlIHlvdSBjYW4gdmVyaWZ5IHVzZXIgY3JlZGVudGlhbHMuXHJcbiAgICAgICAgICAgICAgcmVxdWVzdEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIC8vIHJlcXVlc3RBdXRoZW50aWNhdGlvbjogdXNlcm5hbWUgIT09ICdib2InIHx8IHBhc3N3b3JkICE9PSAnMTIzJyxcclxuXHJcbiAgICAgICAgICAgICAgLy8gU2V0cyB1cCBhbiB1cHN0cmVhbSBIVFRQIHByb3h5IHRvIHdoaWNoIGFsbCB0aGUgcmVxdWVzdHMgYXJlIGZvcndhcmRlZC5cclxuICAgICAgICAgICAgICAvLyBJZiBudWxsLCB0aGUgcHJveHkgd29ya3MgaW4gZGlyZWN0IG1vZGUsIGkuZS4gdGhlIGNvbm5lY3Rpb24gaXMgZm9yd2FyZGVkIGRpcmVjdGx5XHJcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIHRhcmdldCBzZXJ2ZXIuIFRoaXMgZmllbGQgaXMgaWdub3JlZCBpZiBcInJlcXVlc3RBdXRoZW50aWNhdGlvblwiIGlzIHRydWUuXHJcbiAgICAgICAgICAgICAgLy8gVGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBzaG91bGQgYmUgVVJJLWVuY29kZWQsIGluIGNhc2UgaXQgY29udGFpbnMgc29tZSBzcGVjaWFsIGNoYXJhY3RlcnMuXHJcbiAgICAgICAgICAgICAgLy8gU2VlIGBwYXJzZVVybCgpYCBmdW5jdGlvbiBmb3IgZGV0YWlscy5cclxuICAgICAgICAgICAgICAvLyB1cHN0cmVhbVByb3h5VXJsOiBgaHR0cDovL3VzZXJuYW1lOnBhc3N3b3JkQHByb3h5LmV4YW1wbGUuY29tOjMxMjhgLFxyXG5cclxuICAgICAgICAgICAgICAvLyBJZiBcInJlcXVlc3RBdXRoZW50aWNhdGlvblwiIGlzIHRydWUsIHlvdSBjYW4gdXNlIHRoZSBmb2xsb3dpbmcgcHJvcGVydHlcclxuICAgICAgICAgICAgICAvLyB0byBkZWZpbmUgYSBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byByZXR1cm4gdG8gdGhlIGNsaWVudCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IFwiUHJveHkgY3JlZGVudGlhbHMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIGZhaWxNc2c6XHJcbiAgICAgICAgICAgICAgICBcIlBvciBGYXZvciwgcmVpbnRlbnRlbG8gZGUgbnVldm8sIG9jdXJyaW8gdW4gcHJvYmxlbWEgZW4gZWwgc2Vydmlkb3JcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlcnZlcjIubGlzdGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2Vydmlkb3IgUHJveHkgaW5pY2lhZG8gcG9yIGVsIHB1ZXJ0bzogJHtzZXJ2ZXIyLnBvcnR9YCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRW1pdHRlZCB3aGVuIEhUVFAgY29ubmVjdGlvbiBpcyBjbG9zZWRcclxuICAgICAgc2VydmVyMi5vbihcImNvbm5lY3Rpb25DbG9zZWRcIiwgKHsgY29ubmVjdGlvbklkLCBzdGF0cyB9KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENvbm5lY3Rpb24gJHtjb25uZWN0aW9uSWR9IGNsb3NlZGApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKHN0YXRzKTtcclxuICAgICAgICBkaXNjb25lY3QoXCIzMDAyOlwiLCBjb25uZWN0aW9uSWQsIHN0YXRzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIEVtaXR0ZWQgd2hlbiBIVFRQIHJlcXVlc3QgZmFpbHNcclxuICAgICAgc2VydmVyMi5vbihcInJlcXVlc3RGYWlsZWRcIiwgKHsgcmVxdWVzdCwgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0ICR7cmVxdWVzdC51cmx9IGZhaWxlZGApO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBcIlNlIGluaWNpbyBjb3JyZWN0YW1lbnRlIGVsIHByb3h5XCJcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1FUlJPUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgICAgIHJldHVybiBcIkh1Ym8gZXJyb3JlcyBhbCBpbmljaWFyIGVsIHByb3h5IVwiXHJcblxyXG4gICAgICAvLyByZXMuZW5kKGVycm9yLmVycm9yLCB7XHJcbiAgICAgIC8vICAgZXJyb3I6IGVycm9yLmVycm9yLFxyXG4gICAgICAvLyAgIHJlYXNvbjogZXJyb3IucmVhc29uLFxyXG4gICAgICAvLyAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgIC8vICAgZXJyb3JUeXBlOiBlcnJvci5lcnJvclR5cGUsXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gTWV0ZW9yLmNhbGwoXCJsaXN0ZW5wcm94eVwiLChlcnJvcixyZXN1bHQpPT57XHJcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgLy8gfSlcclxufVxyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE9ubGluZUNvbGxlY3Rpb24sXHJcbiAgICBQZWxpc0NvbGxlY3Rpb24sXHJcbiAgICBNZW5zYWplc0NvbGxlY3Rpb24sXHJcbiAgICBTZXJ2ZXJzQ29sbGVjdGlvbixcclxuICAgIFByZWNpb3NDb2xsZWN0aW9uLFxyXG4gICAgVmVudGFzQ29sbGVjdGlvbixcclxuICAgIEZpbGVzQ29sbGVjdGlvbixcclxuICAgIFZlcnNpb25zQ29sbGVjdGlvbixcclxuICAgIExvZ3NDb2xsZWN0aW9uLFxyXG4gICAgRGVzY2FyZ2FzQ29sbGVjdGlvbixcclxuICAgIFRWQ29sbGVjdGlvbixcclxuICAgIFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvblxyXG4gIH0gZnJvbSBcIi4uL2ltcG9ydHMvdWkvcGFnZXMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG4gICAgICAgIE1ldGVvci5zdGFydHVwKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmljaWFuZG8gU2VydmVyIE1ldGVvci4uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8gbW92ZXIgdG9kYXMgbGFzIGltYWdlbmVzIHBhcmEgdXNlci5waWN0dXJlXHJcbiAgICAgICAgICAgIE1ldGVvci51c2Vycy5maW5kKHt9KS5tYXAodXMgPT4ge1xyXG4gICAgICAgICAgICAgIHVzLnNlcnZpY2VzICYmIHVzLnNlcnZpY2VzLmZhY2Vib29rICYmIHVzLnNlcnZpY2VzLmZhY2Vib29rLnBpY3R1cmUuZGF0YS51cmwgJiZcclxuICAgICAgICAgICAgICAgIE1ldGVvci51c2Vycy51cGRhdGUodXMuX2lkLCB7ICRzZXQ6IHsgcGljdHVyZTogdXMuc2VydmljZXMuZmFjZWJvb2sucGljdHVyZS5kYXRhLnVybCB9IH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB1cy5zZXJ2aWNlcyAmJiB1cy5zZXJ2aWNlcy5nb29nbGUgJiYgdXMuc2VydmljZXMuZ29vZ2xlLnBpY3R1cmUgJiZcclxuICAgICAgICAgICAgICAgIE1ldGVvci51c2Vycy51cGRhdGUodXMuX2lkLCB7ICRzZXQ6IHsgcGljdHVyZTogdXMuc2VydmljZXMuZ29vZ2xlLnBpY3R1cmUgfSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5ST09UX1VSTCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuUk9PVF9VUkw7XHJcbiAgICAgICAgICAgIC8vIHByb2Nlc3MuZW52Lk1PTkdPX1VSTCA9IE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuTU9OR09fVVJMO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJPT1RfVVJMOiBcIiArIHByb2Nlc3MuZW52LlJPT1RfVVJMKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNT05HT19VUkw6IFwiICsgcHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgT25saW5lQ29sbGVjdGlvbi5yZW1vdmUoe30pO1xyXG4gICAgICAgICAgIC8vIE9ubGluZUNvbGxlY3Rpb24ucmVtb3ZlKHthZGRyZXNzOiBgMTI3LjAuMC4xYH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gTWV0ZW9yLnNldHRpbmdzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBTZXJ2aWNlQ29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucy5yZW1vdmUoe1xyXG4gICAgICAgICAgICAgIHNlcnZpY2U6ICdnb29nbGUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIFNlcnZpY2VDb25maWd1cmF0aW9uLmNvbmZpZ3VyYXRpb25zLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgc2VydmljZTogJ2dvb2dsZScsXHJcbiAgICAgICAgICAgICAgY2xpZW50SWQ6IHNldHRpbmdzLmdvb2dsZS5jbGllbnRfaWQsXHJcbiAgICAgICAgICAgICAgc2VjcmV0OiBzZXR0aW5ncy5nb29nbGUuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgICB2YWxpZENsaWVudElkczogc2V0dGluZ3MuZ29vZ2xlLnZhbGlkQ2xpZW50SWRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgU2VydmljZUNvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvbnMucmVtb3ZlKHtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IFwiZmFjZWJvb2tcIixcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFNlcnZpY2VDb25maWd1cmF0aW9uLmNvbmZpZ3VyYXRpb25zLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBcImZhY2Vib29rXCIsXHJcbiAgICAgICAgICAgICAgICBhcHBJZDogc2V0dGluZ3MuZmFjZWJvb2suYXBwSWQsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXQ6IHNldHRpbmdzLmZhY2Vib29rLnNlY3JldCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1ldGVvci51c2Vycy5maW5kKHsgXCJwcm9maWxlLnJvbGVcIjogXCJhZG1pblwiIH0pLmNvdW50KCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQU5ETyBVU0VSIEFETUlOXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJjYXJsb3NtYmluZkBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcImxhc3R1bmFzMTIzXCIsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiQ2FybG9zXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJNZWRpbmFcIixcclxuICAgICAgICAgICAgICAgIHJvbGU6IFwiYWRtaW5cIixcclxuICAgICAgICAgICAgICAgIGNyZWFkb1BvcjogXCJTZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhbmVhZG86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZWRhZDogMjYsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTpcImNhcmxvc21iaW5mXCJcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50cy5jcmVhdGVVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBREQgT0tcIik7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk8gU0UgUFVETyBDUkVBUiBFTCBVU0VSIEFETUlOXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllBIEhBWSBVTiBVU0VSIEFETUlOXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCB5b3V0dWJlZGwgPSByZXF1aXJlKCd5b3V0dWJlLWRsJylcclxuICAgICAgICAgICAgLy8gY29uc3QgdXJsID0gJ2h0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XS3NqYU9xRFhnZydcclxuICAgICAgICAgICAgLy8geW91dHViZWRsLmV4ZWModXJsLCBbJy14JywgJy0tYXVkaW8tZm9ybWF0JywgJ21wMyddLCB7fSwgZnVuY3Rpb24oZXJyLCBvdXRwdXQpIHtcclxuICAgICAgICAgICAgLy8gICBpZiAoZXJyKSB0aHJvdyBlcnJcclxuICAgICAgICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhvdXRwdXQuam9pbignXFxuJykpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgIH0iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xyXG5pbXBvcnQgeyBMb2dzQ29sbGVjdGlvbiwgUGVsaXNDb2xsZWN0aW9uLCBSZWdpc3RlckRhdGFVc2Vyc0NvbGxlY3Rpb24gfSBmcm9tIFwiLi4vaW1wb3J0cy91aS9wYWdlcy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uc1wiO1xyXG5cclxudmFyIGNyb24gPSByZXF1aXJlKFwibm9kZS1jcm9uXCIpO1xyXG5cclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuICBjb25zb2xlLmxvZyhcIkNhcmdhbmRvIFRhcmVhcy4uLlwiKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNyb25cclxuICAgICAgLnNjaGVkdWxlKFxyXG4gICAgICAgIC8vIFwiMS01OSAqICogKiAqXCIsXHJcbiAgICAgICAgXCIwIDAgMSAxLTEyICpcIixcclxuICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgIGxldCB1c2VycyA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kKHtcclxuICAgICAgICAgICAgJG9yOiBbXHJcbiAgICAgICAgICAgICAgeyBiYW5lYWRvOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIHsgbWVnYXNHYXN0YWRvc2luQnl0ZXM6IHsgJGd0ZTogMSB9IH0sXHJcbiAgICAgICAgICAgICAgeyBtZWdhc0dhc3RhZG9zaW5CeXRlc0dlbmVyYWw6IHsgJGd0ZTogMSB9IH0sXHJcbiAgICAgICAgICAgICAgeyB2cG46IHRydWUgfSxcclxuICAgICAgICAgICAgICB7IHZwbk1iR2FzdGFkb3M6IHsgJGd0ZTogMSB9IH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiQ291bnQgXCIgKyB1c2Vycy5jb3VudCgpKTtcclxuICAgICAgICAgIC8vIGF3YWl0IGNvbnNvbGUubG9nKFwicnVubmluZyBldmVyeSBtaW51dGUgdG8gMSBmcm9tIDVcIik7XHJcblxyXG4gICAgICAgICAgYXdhaXQgdXNlcnMuZm9yRWFjaChhc3luYyAodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy9DT05TVU1PUyBQUk9YWS8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFJFVklTQU5ETyBBID0+ICR7dXNlci51c2VybmFtZX1gKTtcclxuXHJcbiAgICAgICAgICAgIHVzZXIubWVnYXNHYXN0YWRvc2luQnl0ZXMgPiAwICYmXHJcbiAgICAgICAgICAgICAgKGF3YWl0IFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbi5pbnNlcnQoe1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicHJveHlcIixcclxuICAgICAgICAgICAgICAgIG1lZ2FzR2FzdGFkb3NpbkJ5dGVzOiB1c2VyLm1lZ2FzR2FzdGFkb3NpbkJ5dGVzLFxyXG4gICAgICAgICAgICAgICAgbWVnYXNHYXN0YWRvc2luQnl0ZXNHZW5lcmFsOlxyXG4gICAgICAgICAgICAgICAgICB1c2VyLm1lZ2FzR2FzdGFkb3NpbkJ5dGVzR2VuZXJhbCxcclxuICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICB1c2VyLnZwbk1iR2FzdGFkb3MgPiAwICYmXHJcbiAgICAgICAgICAgICAgKGF3YWl0IFJlZ2lzdGVyRGF0YVVzZXJzQ29sbGVjdGlvbi5pbnNlcnQoe1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidnBuXCIsXHJcbiAgICAgICAgICAgICAgICB2cG5NYkdhc3RhZG9zOiB1c2VyLnZwbk1iR2FzdGFkb3MsXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vRGVqYXIgZW4gY2VybyBlbCBjb25zdW1vIGRlIGxvcyB1c3Vhcmlvc1xyXG4gICAgICAgICAgICBhd2FpdCBNZXRlb3IudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XHJcbiAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgbWVnYXNHYXN0YWRvc2luQnl0ZXM6IDAsXHJcbiAgICAgICAgICAgICAgICBtZWdhc0dhc3RhZG9zaW5CeXRlc0dlbmVyYWw6IDAsXHJcbiAgICAgICAgICAgICAgICB2cG5NYkdhc3RhZG9zOiAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vL0JhbmVhciBQUk9YWS8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgIXVzZXIuaXNJbGltaXRhZG8gJiZcclxuICAgICAgICAgICAgICB1c2VyLmJhbmVhZG8gPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICB1c2VyLnByb2ZpbGUucm9sZSAhPT0gXCJhZG1pblwiICYmXHJcbiAgICAgICAgICAgICAgKGF3YWl0IChNZXRlb3IudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhbmVhZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJCbG9xdWVvIFByb3h5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZmVjdGFkbzogdXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZG1pbjogXCJzZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkVsIHNlcnZlciBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUk9PVF9VUkwgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIEJsb3F1ZW8gYXV0b21hdGljYW1lbnRlIGVsIHByb3h5IHBvciBzZXIgZGlhIFByaW1lcm8gZGUgY2FkYSBNZXNcIixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgTWV0ZW9yLmNhbGwoXHJcbiAgICAgICAgICAgICAgICAgIFwic2VuZE1lbnNhamVcIixcclxuICAgICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBFbCBzZXJ2ZXIgQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgZWwgcHJveHkgYTogJHt1c2VyLnByb2ZpbGUuZmlyc3ROYW1lfSAke3VzZXIucHJvZmlsZS5sYXN0TmFtZX0gcG9yIHNlciBkaWEgUHJpbWVybyBkZSBjYWRhIE1lc2AsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIFwiVmlkS2FyIEJsb3F1ZW8gZGUgUHJveHlcIlxyXG4gICAgICAgICAgICAgICAgKSkpO1xyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vQmFuZWFyIFZQTi8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgIXVzZXIudnBuaXNJbGltaXRhZG8gJiZcclxuICAgICAgICAgICAgICB1c2VyLnZwbiA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgdXNlci5wcm9maWxlLnJvbGUgIT09IFwiYWRtaW5cIiAmJlxyXG4gICAgICAgICAgICAgIChhd2FpdCAoTWV0ZW9yLnVzZXJzLnVwZGF0ZSh1c2VyLl9pZCwge1xyXG4gICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICB2cG46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIExvZ3NDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVlBOXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZmVjdGFkbzogdXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZG1pbjogXCJzZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEVsIHNlcnZlciAke3Byb2Nlc3MuZW52LlJPT1RfVVJMfSBEZXNhY3RpdsOzIGxhIFZQTiBwYXJhICR7dXNlci5wcm9maWxlLmZpcnN0TmFtZX0gJHt1c2VyLnByb2ZpbGUubGFzdE5hbWV9IGRpYSBQcmltZXJvIGRlIGNhZGEgTWVzYCxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgTWV0ZW9yLmNhbGwoXHJcbiAgICAgICAgICAgICAgICAgIFwic2VuZE1lbnNhamVcIixcclxuICAgICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBFbCBzZXJ2ZXIgRGVzYWN0aXbDsyBsYSBWUE4gcGFyYSAke3VzZXIucHJvZmlsZS5maXJzdE5hbWV9ICR7dXNlci5wcm9maWxlLmxhc3ROYW1lfSBwb3Igc2VyIGRpYSBQcmltZXJvIGRlIGNhZGEgTWVzYCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXCJWaWRLYXIgQmxvcXVlbyBkZSBWUE5cIlxyXG4gICAgICAgICAgICAgICAgKSkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzY2hlZHVsZWQ6IHRydWUsXHJcbiAgICAgICAgICB0aW1lem9uZTogXCJBbWVyaWNhL0hhdmFuYVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vQmFuZWFyIHByb3h5IC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGNyb25cclxuICAgICAgLnNjaGVkdWxlKFxyXG4gICAgICAgIFwiMC01OSAqICogKiAqXCIsXHJcbiAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHVzZXJzID0gYXdhaXQgTWV0ZW9yLnVzZXJzLmZpbmQoeyBiYW5lYWRvOiBmYWxzZSB9LCB7XHJcbiAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgIF9pZDogMSxcclxuICAgICAgICAgICAgICBwcm9maWxlOiAxLFxyXG4gICAgICAgICAgICAgIGlzSWxpbWl0YWRvOiAxLFxyXG4gICAgICAgICAgICAgIGZlY2hhU3Vic2NyaXBjaW9uOiAxLFxyXG4gICAgICAgICAgICAgIG1lZ2FzR2FzdGFkb3NpbkJ5dGVzOiAxLFxyXG4gICAgICAgICAgICAgIG1lZ2FzOiAxLFxyXG4gICAgICAgICAgICAgIGJhbmVhZG86IDEsXHJcbiAgICAgICAgICAgICAgYmxvcXVlYWRvRGVzYmxvcXVlYWRvUG9yOiAxLFxyXG4gICAgICAgICAgICAgIGVtYWlsczogMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhd2FpdCB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICEodXNlci51c2VybmFtZSA9PSBcImNhcmxvc21iaW5mXCIpICYmXHJcbiAgICAgICAgICAgIC8vIHVzZXIucHJvZmlsZS5yb2xlICE9IFwiYWRtaW5cIiAmJlxyXG4gICAgICAgICAgICAodXNlci5pc0lsaW1pdGFkb1xyXG4gICAgICAgICAgICAgID8gbmV3IERhdGUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgdXNlci5mZWNoYVN1YnNjcmlwY2lvblxyXG4gICAgICAgICAgICAgICAgICA/IHVzZXIuZmVjaGFTdWJzY3JpcGNpb25cclxuICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgKSAmJlxyXG4gICAgICAgICAgICAgICF1c2VyLmJhbmVhZG8gJiZcclxuICAgICAgICAgICAgICAoTWV0ZW9yLnVzZXJzLnVwZGF0ZSh1c2VyLl9pZCwge1xyXG4gICAgICAgICAgICAgICAgJHNldDogeyBiYW5lYWRvOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAoTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJCbG9xdWVvIFByb3h5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZmVjdGFkbzogdXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZG1pbjogXCJzZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkVsIHNlcnZlciBcIiArIHByb2Nlc3MuZW52LlJPT1RfVVJMICsgXCIgQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgZWwgcHJveHkgcG9ycXVlIGxsZWdvIGEgbGEgZmVjaGEgbGltaXRlXCJcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIE1ldGVvci5jYWxsKFwic2VuZE1lbnNhamVcIixcclxuICAgICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBFbCBzZXJ2ZXIgJHtwcm9jZXNzLmVudi5ST09UX1VSTH0gQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgZWwgcHJveHkgZGUgJHt1c2VyLnByb2ZpbGUuZmlyc3ROYW1lfSAke3VzZXIucHJvZmlsZS5sYXN0TmFtZX0gIHBvcnF1ZSBsbGVnbyBhIGxhIGZlY2hhIGxpbWl0ZS5gLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAnVmlkS2FyIEJsb3F1ZW8gZGUgUHJveHknKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6ICh1c2VyLm1lZ2FzR2FzdGFkb3NpbkJ5dGVzID8gdXNlci5tZWdhc0dhc3RhZG9zaW5CeXRlcyA6IDApID49ICgodXNlci5tZWdhcyA/IE51bWJlcih1c2VyLm1lZ2FzKSA6IDApICogMTAyNDAwMCkgJiZcclxuICAgICAgICAgICAgICAhdXNlci5iYW5lYWRvICYmXHJcbiAgICAgICAgICAgICAgKE1ldGVvci51c2Vycy51cGRhdGUodXNlci5faWQsIHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHsgYmFuZWFkbzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJCbG9xdWVvIFByb3h5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZmVjdGFkbzogdXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJBZG1pbjogXCJzZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkVsIHNlcnZlciBcIiArIHByb2Nlc3MuZW52LlJPT1RfVVJMICsgXCIgQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgZWwgcHJveHkgcG9ycXVlIGNvbnN1bWlvOiBcIiArIHVzZXIubWVnYXMgKyBcIiBNQlwiXHJcbiAgICAgICAgICAgICAgICB9KSwgTWV0ZW9yLmNhbGwoXCJzZW5kTWVuc2FqZVwiLFxyXG4gICAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYEVsIHNlcnZlciAgJHtwcm9jZXNzLmVudi5ST09UX1VSTH0gQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgZWwgcHJveHkgYTogJHt1c2VyLnByb2ZpbGUuZmlyc3ROYW1lfSAke3VzZXIucHJvZmlsZS5sYXN0TmFtZX0gcG9ycXVlIGNvbnN1bWlvOiAke3VzZXIubWVnYXN9IE1CYCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgJ1ZpZEthciBCbG9xdWVvIGRlIFByb3h5JylcclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2NoZWR1bGVkOiB0cnVlLFxyXG4gICAgICAgICAgdGltZXpvbmU6IFwiQW1lcmljYS9IYXZhbmFcIixcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vLy8vLy8vLy9CYW5lYXIgVlBOIC8vLy8vLy8vLy8vLy8vXHJcbiAgICBjcm9uXHJcbiAgICAgIC5zY2hlZHVsZShcclxuICAgICAgICBcIjAtNTkgKiAqICogKlwiLFxyXG4gICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCB1c2VycyA9IGF3YWl0IE1ldGVvci51c2Vycy5maW5kKHsgdnBuOiB0cnVlIH1cclxuICAgICAgICAgICAgLCB7XHJcbiAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICBfaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB2cG5NYkdhc3RhZG9zOiAxLFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZTogMSxcclxuICAgICAgICAgICAgICAgIHZwbm1lZ2FzOiAxLFxyXG4gICAgICAgICAgICAgICAgdnBuOiAxLFxyXG4gICAgICAgICAgICAgICAgYmxvcXVlYWRvRGVzYmxvcXVlYWRvUG9yOiAxLFxyXG4gICAgICAgICAgICAgICAgZW1haWxzOiAxLFxyXG4gICAgICAgICAgICAgICAgdnBuaXNJbGltaXRhZG86IDEsXHJcbiAgICAgICAgICAgICAgICB2cG5mZWNoYVN1YnNjcmlwY2lvbjogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGF3YWl0IHVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyAobmV3IERhdGUobmV3IERhdGUoKSkgPiB1c2VyLnZwbmZlY2hhU3Vic2NyaXBjaW9uKSAmJiAgY29uc29sZS5sb2codXNlcilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUobmV3IERhdGUoKSkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyLnZwbmZlY2hhU3Vic2NyaXBjaW9uKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKG5ldyBEYXRlKG5ldyBEYXRlKCkpID4gdXNlci52cG5mZWNoYVN1YnNjcmlwY2lvbikpXHJcbiAgICAgICAgICAgIC8vICEodXNlci51c2VybmFtZSA9PSBcImNhcmxvc21iaW5mXCIpICYmXHJcbiAgICAgICAgICAgIHVzZXIudnBuaXNJbGltaXRhZG8gJiYgdXNlci52cG5mZWNoYVN1YnNjcmlwY2lvbiAmJlxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKG5ldyBEYXRlKCkpID4gdXNlci52cG5mZWNoYVN1YnNjcmlwY2lvbiAmJlxyXG4gICAgICAgICAgICAgIChNZXRlb3IudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7IHZwbjogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KSwgTG9nc0NvbGxlY3Rpb24uaW5zZXJ0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQmxvcXVlbyBWUE5cIixcclxuICAgICAgICAgICAgICAgIHVzZXJBZmVjdGFkbzogdXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyQWRtaW46IFwic2VydmVyXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICBcIkVsIHNlcnZlciBcIiArIHByb2Nlc3MuZW52LlJPT1RfVVJMICsgXCIgQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgbGEgVlBOIHBvcnF1ZSBsbGVnbyBhIGxhIGZlY2hhIGxpbWl0ZVwiXHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgdXNlci52cG5pc0lsaW1pdGFkbyAmJiB1c2VyLnZwbmZlY2hhU3Vic2NyaXBjaW9uICYmXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShuZXcgRGF0ZSgpKSA+IHVzZXIudnBuZmVjaGFTdWJzY3JpcGNpb24gJiZcclxuICAgICAgICAgICAgICAgIE1ldGVvci5jYWxsKFwic2VuZE1lbnNhamVcIixcclxuICAgICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBFbCBzZXJ2ZXIgQmxvcXVlbyBhdXRvbWF0aWNhbWVudGUgbGEgVlBOIGE6ICR7dXNlci5wcm9maWxlLmZpcnN0TmFtZX0gJHt1c2VyLnByb2ZpbGUubGFzdE5hbWV9IHBvcnF1ZSBwYXNvIGxhIGZlY2hhIGxpbWl0ZTogJHt1c2VyLnZwbmZlY2hhU3Vic2NyaXBjaW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICdWaWRLYXIgQmxvcXVlbyBkZSBWUE4nKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk8gU0UgUFVETyBFTlZJQVIgRUwgRU1BSUxcIilcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAhdXNlci52cG5pc0lsaW1pdGFkbyAmJiAodXNlci52cG5NYkdhc3RhZG9zID8gdXNlci52cG5NYkdhc3RhZG9zIDogMCkgPj0gKCh1c2VyLnZwbm1lZ2FzID8gTnVtYmVyKHVzZXIudnBubWVnYXMpIDogMCkgKiAxMDI0MDAwKSAmJlxyXG4gICAgICAgICAgICAgIChNZXRlb3IudXNlcnMudXBkYXRlKHVzZXIuX2lkLCB7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7IHZwbjogZmFsc2UgfSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIExvZ3NDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQmxvcXVlbyBWUE5cIixcclxuICAgICAgICAgICAgICAgICAgdXNlckFmZWN0YWRvOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgdXNlckFkbWluOiBcInNlcnZlclwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWwgc2VydmVyIFwiICsgcHJvY2Vzcy5lbnYuUk9PVF9VUkwgKyBcIiBCbG9xdWVvIGF1dG9tYXRpY2FtZW50ZSBsYSBWUE4gcG9ycXVlIGNvbnN1bWlvOiBcIiArIHVzZXIudnBubWVnYXMgKyBcIiBNQlwiXHJcbiAgICAgICAgICAgICAgICB9KSwgTWV0ZW9yLmNhbGwoXCJzZW5kTWVuc2FqZVwiLFxyXG4gICAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYEVsIHNlcnZlciBCbG9xdWVvIGF1dG9tYXRpY2FtZW50ZSBsYSBWUE4gYTogJHt1c2VyLnByb2ZpbGUuZmlyc3ROYW1lfSAke3VzZXIucHJvZmlsZS5sYXN0TmFtZX0gcG9ycXVlIGNvbnN1bWlvIHN1czogJHt1c2VyLnZwbm1lZ2FzfSBNQmAsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICdWaWRLYXIgQmxvcXVlbyBkZSBWUE4nKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjaGVkdWxlZDogdHJ1ZSxcclxuICAgICAgICAgIHRpbWV6b25lOiBcIkFtZXJpY2EvSGF2YW5hXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLy8vLy8vLy8vQUNUVUFMSVpBUiBUUkFJTEVSUyAvLy8vLy8vLy8vLy8vL1xyXG4gICAgY3JvblxyXG4gICAgICAuc2NoZWR1bGUoXHJcbiAgICAgICAgXCIwICogKiAqICpcIixcclxuICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgSU1EYiA9IGF3YWl0IHJlcXVpcmUoJ2ltZGItbGlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFBlbGlzQ29sbGVjdGlvbi5maW5kKHt9LCB7IGZpZWxkczogeyBfaWQ6IDEsIG5vbWJyZVBlbGk6IDEsIGlkaW1kYjogMSB9IH0pLmZvckVhY2goYXN5bmMgKHBlbGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgYXdhaXQgY29uc29sZS5sb2coYEFjdHVhbGl6YW5kbyBhICR7cGVsaS5ub21icmVQZWxpfWApXHJcblxyXG4gICAgICAgICAgICAgICBwZWxpLmlkaW1kYiAmJiBhd2FpdCBJTURiLnRyYWlsZXIocGVsaS5pZGltZGIsICAodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZWxpLm5vbWJyZVBlbGkgKyBcIiA9PiBBY3R1YWxpemFuZG8gVVJMIFBlbGljdWxhXCIpICAvLyBvdXRwdXQgaXMgZGlyZWN0IG1wNCB1cmwgKGFsc28gaGF2ZSBleHBpcmF0aW9uIHRpbWVvdXQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgdXJsICYmIFBlbGlzQ29sbGVjdGlvbi51cGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgIHsgX2lkOiBwZWxpLl9pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdXJsVHJhaWxlcjogdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzaWZpY2FjaW9uOiBkZXRhaWxzLkdlbnJlcy5zcGxpdChcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNjaGVkdWxlZDogdHJ1ZSxcclxuICAgICAgICAgIHRpbWV6b25lOiBcIkFtZXJpY2EvSGF2YW5hXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5zdGFydCgpO1xyXG5cclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLy8vLy8vLy8vQUNUVUFMSVpBUiBUUkFJTEVSUyAvLy8vLy8vLy8vLy8vL1xyXG4gICAgY3JvblxyXG4gICAgICAuc2NoZWR1bGUoXHJcbiAgICAgICAgXCIzMCAwICogKiAqXCIsXHJcbiAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgYXdhaXQgTWV0ZW9yLmNhbGwoJ2Nsb3NlcHJveHknLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtyZXN1bHR9IGEgbGFzICR7bmV3IERhdGUoKX1gKVxyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIGF3YWl0IE1ldGVvci5jYWxsKCdsaXN0ZW5wcm94eScsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Jlc3VsdH0gYSBsYXMgJHtuZXcgRGF0ZSgpfWApXHJcbiAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2NoZWR1bGVkOiB0cnVlLFxyXG4gICAgICAgICAgdGltZXpvbmU6IFwiQW1lcmljYS9IYXZhbmFcIixcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xyXG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJ1xyXG5pbXBvcnQge1xyXG4gIE9ubGluZUNvbGxlY3Rpb25cclxufSBmcm9tIFwiLi4vaW1wb3J0cy91aS9wYWdlcy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9zdGFydHVwXCI7XHJcbmltcG9ydCBcIi4vbWV0b2Rvc1wiO1xyXG5pbXBvcnQgXCIuL3B1YmxpY2FjaW9uZXNcIjtcclxuaW1wb3J0IFwiLi9zZXJ2ZXJwcm94eTMwMDJcIjtcclxuaW1wb3J0IFwiLi90YXJlYXNcIjtcclxuaW1wb3J0IFwiLi9ydXRhc1wiO1xyXG5cclxuXHJcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcbmh0dHAucG9zdCA9IHJlcXVpcmUoXCJodHRwLXBvc3RcIik7XHJcblxyXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XHJcbiAgLy8gR3JvdXAuc3Vic2NyaXB0aW9uID0gTWV0ZW9yLnN1YnNjcmliZShcImxpbmtzXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbnZhciBhcHBSb290ID0gcmVxdWlyZShcImFwcC1yb290LXBhdGhcIik7XHJcbi8vICAgdHJ5e1xyXG4vLyAgICAgU1NMUHJveHkoe1xyXG4vLyAgICAgICAgIHBvcnQ6IDgwODAsIC8vb3IgNDQzIChub3JtYWwgcG9ydC9yZXF1aXJlcyBzdWRvKVxyXG4vLyAgICAgICAgIHNzbCA6IHtcclxuLy8gICAgICAgICAgIGtleTogZnMucmVhZEZpbGVTeW5jKGFwcFJvb3QucGF0aCArICcvc2VydmVyL2NvbmYva2V5LnBlbScpLFxyXG4vLyAgICAgICAgICAgY2VydDogZnMucmVhZEZpbGVTeW5jKGFwcFJvb3QucGF0aCArICcvc2VydmVyL2NvbmYvY2VydC5wZW0nKVxyXG5cclxuLy8gICAgICAgICAgICAgLy9PcHRpb25hbCBDQVxyXG4vLyAgICAgICAgICAgICAvL0Fzc2V0cy5nZXRUZXh0KFwiY2EucGVtXCIpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfWNhdGNoKGVycm9yKXtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbi8vICAgfVxyXG5cclxuLy8gdmFyIFBBVEhfVE9fS0VZID1cclxuLy8gICBhcHBSb290LnBhdGggKyBcIi9zZXJ2ZXIvY29uZi92aWRrYXIua2V5XCI7XHJcbi8vIHZhciBQQVRIX1RPX0NFUlQgPVxyXG4vLyAgIGFwcFJvb3QucGF0aCArIFwiL3NlcnZlci9jb25mL3ZpZGthci5jcnRcIjtcclxuLy8gdmFyIGh0dHBQcm94eSA9IHJlcXVpcmUoXCJodHRwLXByb3h5XCIpO1xyXG4vLyB2YXIgb3B0aW9ucyA9IHtcclxuLy8gICBzc2w6IHtcclxuLy8gICAgIGtleTogZnMucmVhZEZpbGVTeW5jKFBBVEhfVE9fS0VZLCBcInV0ZjhcIiksXHJcbi8vICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoUEFUSF9UT19DRVJULCBcInV0ZjhcIiksXHJcbi8vICAgfSxcclxuLy8gICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDo2MDAwXCIsXHJcbi8vICAgd3M6IHRydWUsXHJcbi8vICAgeGZ3ZDogdHJ1ZSxcclxuLy8gfTtcclxuLy8gdmFyIHNlcnZlciA9IGh0dHBQcm94eS5jcmVhdGVQcm94eVNlcnZlcihvcHRpb25zKS5saXN0ZW4oNTAwMCk7XHJcbi8vIGNvbnNvbGUubG9nKFwiaHR0cFByb3h5IHJ1bm5pbmcgd2l0aCB0YXJnZXQgYXQgXCIgKyBvcHRpb25zLnRhcmdldCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tRXN0ZSBQcm94eSBGdW5jaW9uYSBhbCBGVUxMTExMTExMTC0tLS0tLS0tLS0tXHJcbi8vIGNvbnN0IHByb3h5ID0gcmVxdWlyZSgnQHVjaXBhc3MvcHJveHknKVxyXG4vLyBjb25zdCBwcm94eVBvcnQgPSAzMDAyXHJcbi8vIHByb3h5KHByb3h5UG9ydClcclxuLy8gICAudGhlbigoKSA9PiB7XHJcbi8vICAgICAvLyBVc2UgaXQgZm9yIGEgd2hpbGUuLi4uXHJcbi8vICAgfSlcclxuLy8gICAudGhlbigoc2VydmVyKSA9PiB7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhzZXJ2ZXIpO1xyXG4vLyAgICAgLy8gc2VydmVyLnN0b3AoKVxyXG4vLyAgIH0pXHJcblxyXG5cclxuXHJcbi8vIHZhciBodHRwUHJveHkgPSByZXF1aXJlKCdodHRwLXByb3h5Jyk7XHJcbi8vIGNvbnN0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gY29uc3QgYmFzaWNBdXRoID0gcmVxdWlyZShcImJhc2ljLWF1dGhcIik7XHJcbi8vICAgY29uc3QgcG9ydCA9IDMwMDM7XHJcbi8vICAgY29uc3QgdGFyZ2V0ID0gXCJodHRwczovL3d3dy5nb29nbGUuZXNcIjtcclxuLy8gICBjb25zdCBhdXRoID0gXCJrcmx5Omxhc3R1bmFzMTIzXCI7XHJcblxyXG4vLyAgIGlmICghKHRhcmdldCAmJiBwb3J0ICYmIGF1dGgpKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIlVzYWdlOiBiYXNpYy1hdXRoLXByb3h5LXNlcnZlciA8cG9ydD4gPGJhY2tlbmQ+IDxhdXRoPlwiKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiIC0gcG9ydCAgICAgICA6IHBvcnQgZm9yIHByb3h5IHNlcnZlciBlLmcuIDgwMDBcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIiAtIGJhY2tlbmQgICAgOiBwcm94eSB0YXJnZXQgYWRkcmVzcyBlLmcuIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiIC0gYXV0aCAgICAgICA6IHt1c2VyfTp7cGFzc3dvcmR9IGUuZy4gdG9tOjEyMzQxMjM0XCIpO1xyXG4vLyAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc3QgcHJveHkyID0gaHR0cFByb3h5LmNyZWF0ZVByb3h5U2VydmVyKCk7XHJcblxyXG4vLyAgIGh0dHBcclxuLy8gICAgIC5jcmVhdGVTZXJ2ZXIoXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBzc2w6IHtcclxuLy8gICAgICAgICAgIGtleTogZnMucmVhZEZpbGVTeW5jKFBBVEhfVE9fS0VZLCBcInV0ZjhcIiksXHJcbi8vICAgICAgICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoUEFUSF9UT19DRVJULCBcInV0ZjhcIiksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgW25hbWUsIHBhc3N3b3JkXSA9IGF1dGguc3BsaXQoXCI6XCIpO1xyXG4vLyAgICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBiYXNpY0F1dGgocmVxKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhjcmVkZW50aWFsKTtcclxuXHJcbi8vICAgICAgICAgaWYgKFxyXG4vLyAgICAgICAgICAgIShcclxuLy8gICAgICAgICAgICAgY3JlZGVudGlhbCAmJlxyXG4vLyAgICAgICAgICAgICBjcmVkZW50aWFsLm5hbWUgPT09IG5hbWUgJiZcclxuLy8gICAgICAgICAgICAgY3JlZGVudGlhbC5wYXNzID09PSBwYXNzd29yZFxyXG4vLyAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICkge1xyXG4vLyAgICAgICAgICAgcmVzLndyaXRlSGVhZCg0MDEsIHtcclxuLy8gICAgICAgICAgICAgXCJXV1ctQXV0aGVudGljYXRlXCI6ICdCYXNpYyByZWFsbT1cInNlY3JldCB6b25lXCInLFxyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICByZXMuZW5kKFwiQWNjZXNzIGRlbmllZFwiKTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlcSlcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS51cmwpO1xyXG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLmhvc3RuYW1lKVxyXG4vLyAgICAgICAgICAgdmFyIG9wdGlvbiA9IHtcclxuLy8gICAgICAgICAgICAgc3NsOiB7XHJcbi8vICAgICAgICAgICAgICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoUEFUSF9UT19LRVksIFwidXRmOFwiKSxcclxuLy8gICAgICAgICAgICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoUEFUSF9UT19DRVJULCBcInV0ZjhcIiksXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHdzOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICB4ZndkOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAvLyBzZWN1cmU6dHJ1ZSxcclxuLy8gICAgICAgICAgICAgZm9sbG93UmVkaXJlY3RzOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBob3N0UmV3cml0ZTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgYXV0b1Jld3JpdGU6IHRydWUsXHJcbi8vICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgaWdub3JlUGF0aDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgLy8gc2VsZkhhbmRsZVJlc3BvbnNlOnRydWUsXHJcblxyXG4vLyAgICAgICAgICAgICB0YXJnZXQ6IHJlcS51cmwsXHJcbi8vICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgcHJveHkyLndlYihyZXEsIHJlcywgb3B0aW9uKTtcclxuLy8gICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIClcclxuLy8gICAgIC5saXN0ZW4ocG9ydCk7XHJcblxyXG4vLyBJZiB0aGUgTGlua3MgY29sbGVjdGlvbiBpcyBlbXB0eSwgYWRkIHNvbWUgZGF0YS5cclxuXHJcbi8vIE1ldGVvci51c2Vycy5hbGxvdyh7XHJcbi8vICAgaW5zdGVydCgpIHsgcmV0dXJuIHRydWU7IH1cclxuLy8gfSk7XHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuXHJcbiAgTWV0ZW9yLm9uQ29ubmVjdGlvbihmdW5jdGlvbiAoY29ubmVjdGlvbikge1xyXG4gICAgT25saW5lQ29sbGVjdGlvbi5pbnNlcnQoe1xyXG4gICAgICBfaWQ6IGNvbm5lY3Rpb24uaWQsXHJcbiAgICAgIGFkZHJlc3M6IGNvbm5lY3Rpb24uY2xpZW50QWRkcmVzcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25DbG9zZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIE9ubGluZUNvbGxlY3Rpb24ucmVtb3ZlKGNvbm5lY3Rpb24uaWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIEFjY291bnRzLm9uTG9naW4oZnVuY3Rpb24gKGluZm8pIHtcclxuICAgIHZhciBjb25uZWN0aW9uSWQgPSBpbmZvLmNvbm5lY3Rpb24uaWQ7XHJcbiAgICB2YXIgdXNlciA9IGluZm8udXNlcjtcclxuICAgIHZhciB1c2VySWQgPSB1c2VyLl9pZDtcclxuXHJcbiAgICBPbmxpbmVDb2xsZWN0aW9uLnVwZGF0ZShjb25uZWN0aW9uSWQsIHtcclxuICAgICAgJHNldDoge1xyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIGxvZ2luQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIE1ldGVvci51c2Vycy51cGRhdGUodXNlcklkLCB7XHJcbiAgICAvLyAgICRzZXQ6IHtcclxuICAgIC8vICAgICBvbmxpbmU6IHRydWUsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KTtcclxuICB9KTtcclxuXHJcbiAgQWNjb3VudHMub25Mb2dvdXQoZnVuY3Rpb24gKGluZm8pIHtcclxuICAgIHZhciBjb25uZWN0aW9uSWQgPSBpbmZvLmNvbm5lY3Rpb24uaWQ7XHJcbiAgICBPbmxpbmVDb2xsZWN0aW9uLnVwZGF0ZShjb25uZWN0aW9uSWQsIHtcclxuICAgICAgJHNldDoge1xyXG4gICAgICAgIHVzZXJJZDogXCJcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gTWV0ZW9yLnVzZXJzLnVwZGF0ZShpbmZvLnVzZXIuX2lkLCB7XHJcbiAgICAvLyAgICRzZXQ6IHtcclxuICAgIC8vICAgICBvbmxpbmU6IGZhbHNlLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSk7XHJcbiAgfSk7XHJcblxyXG4gIEFjY291bnRzLm9uQ3JlYXRlVXNlcihmdW5jdGlvbiAob3B0aW9ucywgdXNlcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJvcHRpb25zID4gXCIgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlciA+IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICBpZiAodXNlci5zZXJ2aWNlcy5mYWNlYm9vaykge1xyXG4gIFxyXG4gICAgICAvLyAgdXNlci51c2VybmFtZSA9IHVzZXIuc2VydmljZXMuZmFjZWJvb2submFtZTtcclxuICAgICAgLy8gbGV0IHVzdWFyaW8gPSAgTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyBcInNlcnZpY2VzLmZhY2Vib29rLm5hbWVcIjogdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5uYW1lIH0pXHJcbiAgICAgIGxldCB1c3VhcmlvID0gdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5lbWFpbCA/IE1ldGVvci51c2Vycy5maW5kT25lKHsgXCJlbWFpbHMuYWRkcmVzc1wiOiB1c2VyLnNlcnZpY2VzLmZhY2Vib29rLmVtYWlsIH0pIDogTWV0ZW9yLnVzZXJzLmZpbmRPbmUoeyBcInNlcnZpY2VzLmZhY2Vib29rLmZpcnN0X25hbWVcIjogdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5maXJzdF9uYW1lLCBcInNlcnZpY2VzLmZhY2Vib29rLmxhc3RfbmFtZVwiOiB1c2VyLnNlcnZpY2VzLmZhY2Vib29rLmxhc3RfbmFtZSB9KVxyXG4gIFxyXG4gICAgICB1c3VhcmlvID9cclxuICAgICAgICAoY29uc29sZS5sb2coYFVzdWFyaW8gZGUgRkFDRUJPT0sgJHt1c3VhcmlvLl9pZH0gYWN0dWFsaXphZG9gKSxcclxuICAgICAgICAgIHVzdWFyaW8uc2VydmljZXMuZmFjZWJvb2sgPSB1c2VyLnNlcnZpY2VzLmZhY2Vib29rLFxyXG4gICAgICAgICAgdXNlciA9IHVzdWFyaW8sXHJcbiAgICAgICAgICB1c2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5sYXN0X25hbWUsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIuc2VydmljZXMuZmFjZWJvb2submFtZSxcclxuICAgICAgICAgICAgcm9sZTogdXNlci5wcm9maWxlLnJvbGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdXNlci5waWN0dXJlID0gdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5waWN0dXJlLmRhdGEudXJsLFxyXG4gICAgICBNZXRlb3IudXNlcnMucmVtb3ZlKHVzdWFyaW8uX2lkKVxyXG4gIFxyXG4gICAgICAgIClcclxuICAgICAgICA6IChjb25zb2xlLmxvZyhgVXN1YXJpbyBkZSBGQUNFQk9PSyAke3VzZXIuX2lkfSBDcmVhZG9gKSxcclxuICAgICAgICAgICh1c2VyLmVtYWlscyA9IFt7IGFkZHJlc3M6IHVzZXIuc2VydmljZXMuZmFjZWJvb2suZW1haWwgfV0pLFxyXG4gICAgICAgICAgKHVzZXIucHJvZmlsZSA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLnNlcnZpY2VzLmZhY2Vib29rLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiB1c2VyLnNlcnZpY2VzLmZhY2Vib29rLmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5uYW1lLFxyXG4gICAgICAgICAgICByb2xlOiBcInVzZXJcIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHVzZXIub25saW5lID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHVzZXIuY3JlYWRvUG9yID0gXCJGYWNlYm9va1wiKSxcclxuICAgICAgICAgICh1c2VyLmJhbmVhZG8gPSB0cnVlKSxcclxuICAgICAgICAgICh1c2VyLnBpY3R1cmUgPSB1c2VyLnNlcnZpY2VzLmZhY2Vib29rLnBpY3R1cmUuZGF0YS51cmwpLFxyXG4gICAgICAgICAgKHVzZXIuZGVzY3VlbnRvcHJveHkgPSAwKSxcclxuICAgICAgICAgICh1c2VyLmRlc2N1ZW50b3ZwbiA9IDApLFxyXG4gICAgICAgICAgKHVzZXIuY29udGFuZG9Qcm94eSA9IHRydWUpLFxyXG4gICAgICAgICAgKHVzZXIuY29udGFuZG9WUE4gPSB0cnVlKVxyXG4gICAgICAgICAgKTtcclxuICBcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgXHJcbiAgICB9IGVsc2UgaWYgKHVzZXIuc2VydmljZXMuZ29vZ2xlKSB7XHJcbiAgICAgIC8vICB1c2VyLnVzZXJuYW1lID0gdXNlci5zZXJ2aWNlcy5mYWNlYm9vay5uYW1lO1xyXG4gIFxyXG4gICAgICBsZXQgdXN1YXJpbyA9IHVzZXIuc2VydmljZXMuZ29vZ2xlLmVtYWlsICYmIE1ldGVvci51c2Vycy5maW5kT25lKHsgXCJlbWFpbHMuYWRkcmVzc1wiOiB1c2VyLnNlcnZpY2VzLmdvb2dsZS5lbWFpbCB9KVxyXG4gICAgICB1c3VhcmlvID9cclxuICAgICAgICAoY29uc29sZS5sb2coYFVzdWFyaW8gZGUgR09PR0xFICR7dXN1YXJpby5faWR9IGFjdHVhbGl6YWRvYCksXHJcbiAgICAgICAgICB1c3VhcmlvLnNlcnZpY2VzLmdvb2dsZSA9IHVzZXIuc2VydmljZXMuZ29vZ2xlLFxyXG4gICAgICAgICAgdXNlciA9IHVzdWFyaW8sXHJcbiAgICAgICAgICB1c2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogdXNlci5zZXJ2aWNlcy5nb29nbGUuZ2l2ZW5fbmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXIuc2VydmljZXMuZ29vZ2xlLmZhbWlseV9uYW1lLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLnNlcnZpY2VzLmdvb2dsZS5uYW1lLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnByb2ZpbGUucm9sZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB1c2VyLnBpY3R1cmUgPSB1c2VyLnNlcnZpY2VzLmdvb2dsZS5waWN0dXJlLFxyXG4gICAgICAgICAgTWV0ZW9yLnVzZXJzLnJlbW92ZSh1c3VhcmlvLl9pZCkgICAgICAgXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiAoY29uc29sZS5sb2coYFVzdWFyaW8gZGUgR09PR0xFICR7dXNlci5faWR9IENyZWFkb2ApLFxyXG4gICAgICAgICAgKHVzZXIuZW1haWxzID0gW3sgYWRkcmVzczogdXNlci5zZXJ2aWNlcy5nb29nbGUuZW1haWwgfV0pLFxyXG4gICAgICAgICAgKHVzZXIucHJvZmlsZSA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyLnNlcnZpY2VzLmdvb2dsZS5naXZlbl9uYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogdXNlci5zZXJ2aWNlcy5nb29nbGUuZmFtaWx5X25hbWUsXHJcbiAgICAgICAgICAgIG5hbWU6IHVzZXIuc2VydmljZXMuZ29vZ2xlLm5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodXNlci5vbmxpbmUgPSBmYWxzZSksXHJcbiAgICAgICAgICAodXNlci5jcmVhZG9Qb3IgPSBcIkdvb2dsZVwiKSxcclxuICAgICAgICAgICh1c2VyLmJhbmVhZG8gPSB0cnVlKSxcclxuICAgICAgICAgICh1c2VyLnBpY3R1cmUgPSB1c2VyLnNlcnZpY2VzLmdvb2dsZS5waWN0dXJlKSxcclxuICAgICAgICAgICh1c2VyLmRlc2N1ZW50b3Byb3h5ID0gMCksXHJcbiAgICAgICAgICAodXNlci5kZXNjdWVudG92cG4gPSAwKSxcclxuICAgICAgICAgICh1c2VyLmNvbnRhbmRvUHJveHkgPSB0cnVlKSxcclxuICAgICAgICAgICh1c2VyLmNvbnRhbmRvVlBOID0gdHJ1ZSkpO1xyXG4gICAgICByZXR1cm4gdXNlcjtcclxuICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBvcHRpb25zLmZpcnN0TmFtZSxcclxuICAgICAgICBsYXN0TmFtZTogb3B0aW9ucy5sYXN0TmFtZSxcclxuICAgICAgICByb2xlOiBvcHRpb25zLnJvbGUsXHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIC8vIHVzZXIudXNlcm5hbWUgPSBvcHRpb25zLmZpcnN0TmFtZSArIG9wdGlvbnMubGFzdE5hbWVcclxuICAgICAgdXNlci5wcm9maWxlID0gcHJvZmlsZTtcclxuICAgICAgdXNlci5jcmVhZG9Qb3IgPSBvcHRpb25zLmNyZWFkb1BvcjtcclxuICAgICAgdXNlci5ibG9xdWVhZG9EZXNibG9xdWVhZG9Qb3IgPSBvcHRpb25zLmNyZWFkb1BvcjtcclxuICAgICAgdXNlci5lZGFkID0gb3B0aW9ucy5lZGFkO1xyXG4gICAgICB1c2VyLm9ubGluZSA9IGZhbHNlO1xyXG4gICAgICB1c2VyLmJhbmVhZG8gPSB0cnVlO1xyXG4gICAgICB1c2VyLmRlc2N1ZW50b3Byb3h5ID0gMDtcclxuICAgICAgdXNlci5kZXNjdWVudG92cG4gPSAwO1xyXG4gICAgICB1c2VyLmNvbnRhbmRvUHJveHkgPSB0cnVlO1xyXG4gICAgICB1c2VyLmNvbnRhbmRvVlBOID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coYHVzZXI6IFxcbiR7SlNPTi5zdHJpbmdpZnkodXNlcil9XFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5gKVxyXG4gICAgICBjb25zb2xlLmxvZyhgb3B0aW9uczogXFxuJHtKU09OLnN0cmluZ2lmeShvcHRpb25zKX1cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbmApXHJcbiAgXHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfVxyXG4gIFxyXG4gIH0pO1xyXG5cclxuICBNZXRlb3IudXNlcnMuYWZ0ZXIuaW5zZXJ0KGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlcklkKTtcclxuICAgIGNvbnNvbGUubG9nKGBVc3VhcmlvIENyZWFkbyBjb24gaWQgPT4gJHtkb2MuX2lkfWApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
