import Map "mo:base/HashMap";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Text "mo:base/Text";

actor {
  type Post = {
    title : Text;
    content : Text;
  };

  func natHash(n: Nat) : Hash.Hash {
    Text.hash(Nat.toText(n));
  };

  var posts = Map.HashMap<Nat, Post>(0, Nat.equal, natHash);
  var nextId : Nat = 0;
  let name = "Allan Ogweta";

  public query func getName() : async Text {
    return name;
  };

  public query func getPosts() : async [Post] {
    Iter.toArray(posts.vals());
  };

  public func addPost(title: Text, content: Text) : async () {
    let id = nextId;
    posts.put(id, {
      title = title;
      content = content;
    });
    nextId += 1;
  };

  public func deletePost(id: Nat) : async () {
    posts.delete(id);
  };
};
